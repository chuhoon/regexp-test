const str = `
010-1234-5678
thekhchu1220@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=\@)/g) // 앞쪽 일치
)

console.log(
  str.match(/(?<=\@).{1,}/g) // 뒤쪽 일치
)