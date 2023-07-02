export function parseXml(xml) {
  const parser = new DOMParser()
  const html = parser.parseFromString(xml, "application/xml")
  console.log(html)
  return html
}