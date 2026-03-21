import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
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
