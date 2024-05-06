export function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export function isMobile() {
  return !!/Mobi/.test(navigator.userAgent);
}