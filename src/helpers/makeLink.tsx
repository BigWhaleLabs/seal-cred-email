import colors from '../styles/colors'

export default function (link: string, text: string) {
  return (
    <a
      className="link-text"
      href={link}
      style={{ color: colors.alternative }}
      target="_blank"
    >
      {text}
    </a>
  )
}
