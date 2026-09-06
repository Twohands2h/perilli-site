// Server component: nessun JS lato client.
// preload="none" → sulla rete di un ufficio si scarica solo il poster
// finché qualcuno non preme play.

type Props = {
  src: string
  poster: string
  label: string
  caption?: string
}

export default function LuxVideo({ src, poster, label, caption }: Props) {
  return (
    <figure className="m-0">
      <video
        className="w-full rounded-sm bg-white/5"
        src={src}
        poster={poster}
        controls
        preload="none"
        playsInline
        aria-label={label}
      />
      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
