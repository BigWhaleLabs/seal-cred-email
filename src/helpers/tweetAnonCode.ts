const mention = '\x40'

function tweetWithText({ text }: { text: string }) {
  return `https://twitter.com/intent/tweet?text=${text}`
}

export default function tweetAnonCode(anonCode: string) {
  return tweetWithText({
    text: `🕯🫖🕯 Summoning a ${mention}ketlxyz invite for myself (${anonCode})`,
  })
}
