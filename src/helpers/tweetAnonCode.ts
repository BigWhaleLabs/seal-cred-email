function tweetWithText({
  hashTags,
  text,
}: {
  text: string
  hashTags?: string[]
}) {
  const hashTagsString = hashTags?.join(',')

  console.log(
    `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashTagsString}`
  )

  return `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashTagsString}`
}

export default function tweetAnonCode(anonCode: string) {
  return tweetWithText({
    hashTags: ['ketl', 'wtfdopeoplethink'],
    text: `🕯🫖🕯 Summoning a @‌ketlxyz invite for myself (${anonCode})`,
  })
}
