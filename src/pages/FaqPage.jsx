import RawHtml from '../components/RawHtml';

const markup = "<div class=\"page\" data-page=\"faq\">\n  <div class=\"wrap page-head\"><span class=\"kicker\">FAQs</span><h1>Questions, <span class=\"o\">answered.</span></h1><p>Everything teams ask before they hand their daily operations to IntellioEra.</p></div>\n  <section class=\"sec\" style=\"padding-top:20px\"><div class=\"wrap\"><div class=\"faq\" id=\"faqList\"></div>\n    <div style=\"text-align:center;margin-top:40px\"><button class=\"btn magnetic open-live\">Still unsure? Ask Live</button></div></div></section>\n</div>";

export default function FaqPage() {
  return <RawHtml html={markup} />;
}
