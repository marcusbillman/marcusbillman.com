export function disableBodyScroll() {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  document.body.style.overflow = 'hidden';
}

export function enableBodyScroll() {
  document.body.style.paddingRight = '0';
  document.body.style.overflow = 'auto';
}
