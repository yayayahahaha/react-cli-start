
// 取得github user repo 的readme
export const loadReadme = async(login, repo) => {
  if (!login || !repo) return
  const url = `https://api.github.com/repos/${login}/${repo}/readme`

  const { download_url } = await (await fetch(url)).json()
  if (!download_url) throw new Error('發生錯誤啦')
  const markdown = await (await fetch(download_url)).text()

  return markdown
}