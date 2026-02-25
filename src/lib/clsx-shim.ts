export type ClassValue = any
function flatten(input: any[]): any[] {
  const out: any[] = []
  for (const item of input) {
    if (!item) continue
    if (Array.isArray(item)) {
      out.push(...flatten(item))
    } else if (typeof item === 'object') {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key) && item[key]) {
          out.push(key)
        }
      }
    } else {
      out.push(item)
    }
  }
  return out
}
export default function clsx(...inputs: any[]): string {
  return flatten(inputs).join(' ')
}
