export function isSafari() {
  if (typeof navigator === "undefined")
    return null;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export function isMobile() {
  if (typeof navigator === "undefined")
    return null;
  return !!/Mobi/.test(navigator.userAgent);
}