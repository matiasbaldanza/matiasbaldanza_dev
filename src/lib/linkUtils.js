export const isExternalLink = (url) => {
  try {
    const currentHost = new URL(window.location.href).host
    const urlHost = new URL(url).host

    return currentHost !== urlHost
  } catch (error) {
    // If the URL is not valid, return false or handthe the error
    return false
  }
}
