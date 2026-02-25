const PHONE = '5524992627164'
export function buildWhatsAppLink(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
}
