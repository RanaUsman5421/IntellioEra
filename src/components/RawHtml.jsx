export default function RawHtml({ html, className }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
