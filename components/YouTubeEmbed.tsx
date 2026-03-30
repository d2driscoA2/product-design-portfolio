interface YouTubeEmbedProps {
  videoId: string;
  startSeconds?: number;
  title?: string;
}

export default function YouTubeEmbed({ videoId, startSeconds, title }: YouTubeEmbedProps) {
  const params = new URLSearchParams({ rel: '0', modestbranding: '1' });
  if (startSeconds) params.set('start', String(startSeconds));
  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className="w-full">
      <iframe
        src={src}
        title={title ?? 'Video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full aspect-video rounded-xl"
        style={{ border: 'none', display: 'block' }}
      />
    </div>
  );
}
