import RawHtml from '../components/RawHtml';

const markup = "<div class=\"page\" data-page=\"blogs\">\n  <div class=\"wrap page-head\">\n    <span class=\"kicker\">Blogs</span>\n    <h1>Ideas for the <span class=\"o\">era of intelligence.</span></h1>\n    <p>Practical writing on automation, AI agents and how growing businesses run themselves.</p>\n  </div>\n  <section class=\"sec\" style=\"padding-top:20px\"><div class=\"wrap\"><div class=\"blogs\" id=\"blogGrid\"></div></div></section>\n</div>\n\n<!--PAGES_EXTRA-->";

export default function BlogsPage() {
  return <RawHtml html={markup} />;
}
