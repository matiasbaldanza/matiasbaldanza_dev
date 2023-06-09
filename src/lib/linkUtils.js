export const isExternalLink = (url, currentHost) => {
  try {
    const urlHost = new URL(url).host

    return currentHost !== urlHost
  } catch (error) {
    // If the URL is not valid, return false or handle the error
    return false
  }
}
