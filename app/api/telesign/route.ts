import { NextRequest, NextResponse } from 'next/server'

const requestCounts: Record<string, number[]> = {}
const RATE_LIMIT = 10

const ALLOWED_ORIGINS = [
  'https://displayedux.com',
  'https://www.displayedux.com',
  'http://localhost:3000',
]

export async function POST(request: NextRequest) {
  try {
    // Origin check
    const origin = request.headers.get('origin') || request.headers.get('referer') || ''
    if (!ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
      return NextResponse.json({ error: 'forbidden' }, { status: 403 })
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    const now = Date.now()
    requestCounts[ip] = (requestCounts[ip] ?? []).filter(t => now - t < 60000)
    requestCounts[ip].push(now)
    if (requestCounts[ip].length > RATE_LIMIT) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
    }

    const { phone } = await request.json()
    if (!phone) return NextResponse.json({ error: 'no_phone' })

    const customerId = process.env.TELESIGN_CUSTOMER_ID
    const apiKey    = process.env.TELESIGN_API_KEY

    if (
      !customerId || !apiKey ||
      customerId === 'your_customer_id_here' ||
      apiKey === 'your_api_key_here'
    ) {
      return NextResponse.json({ error: 'not_configured' })
    }

    const credentials = Buffer.from(`${customerId}:${apiKey}`).toString('base64')
    const cleanPhone  = phone.replace(/\D/g, '')

    const res = await fetch(
      `https://rest-api.telesign.com/v1/phoneid/${encodeURIComponent(cleanPhone)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!res.ok) return NextResponse.json({ error: 'api_error' })

    const data = await res.json()

    return NextResponse.json({
      score:          data.risk?.score          ?? null,
      recommendation: data.risk?.recommendation ?? null,
      phone_type:     data.phone_type?.description ?? data.phone_type?.code ?? null,
      carrier:        data.carrier?.name        ?? null,
    })
  } catch {
    return NextResponse.json({ error: 'server_error' })
  }
}
