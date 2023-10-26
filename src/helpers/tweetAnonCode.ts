function tweetWithTextLink({ text }: { text: string }) {
  return `https://twitter.com/intent/tweet?text=${text}`
}

const getAnonCodeText = (anonCode: string) => {
  const texts = [
    `Hey @ketlxyz 👋 Can you verify me (${anonCode})?\nI’m excited to join your anonymous app for verified VCs and Founders.`,
    `I’m ready to spill some tea 🫖 @ketl.xyz (${anonCode})`,
    `🥸 @ketl.xyz, it’s me 🤫 (${anonCode})`,
    `🫖🥸🫖 I’m bringing the tea @ketl.xyz (${anonCode})`,
    `🤞Hoping for an invite to @ketl.xyz (${anonCode})`,
    `🥸🫖🐳🫖🥸 @ketl.xyz (${anonCode})`,
    `My tea is getting cold @ketl.xyz 🫖⛄️ (${anonCode})`,
  ]
  return texts[Math.floor(Math.random() * texts.length)]
}

export default function tweetAnonCode(anonCode: string) {
  return tweetWithTextLink({ text: getAnonCodeText(anonCode) })
}
