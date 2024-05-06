export function IsSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }