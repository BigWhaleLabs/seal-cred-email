function tweetWithTextLink({ text }: { text: string }) {
  return `https://twitter.com/intent/tweet?text=${text}`
}

const getAnonCodeText = (anonCode: string) => {
  const texts = [
    `Hey @ketlxyz 👋 Can you verify me (${anonCode})?\nI’m excited to join your anonymous app for verified VCs and Founders.`,
    `I’m ready to spill some tea 🫖 @ketlxyz (${anonCode})`,
    `🥸 @ketlxyz, it’s me 🤫 (${anonCode})`,
    `🫖🥸🫖 I’m bringing the tea @ketlxyz (${anonCode})`,
    `🤞Hoping for an invite to @ketlxyz (${anonCode})`,
    `🥸🫖🐳🫖🥸 @ketlxyz (${anonCode})`,
    `My tea is getting cold @ketlxyz 🫖⛄️ (${anonCode})`,
  ]
  return texts[Math.floor(Math.random() * texts.length)]
}

export default function tweetAnonCode(anonCode: string) {
  return tweetWithTextLink({ text: getAnonCodeText(anonCode) })
}
