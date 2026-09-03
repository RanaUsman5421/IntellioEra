import RawHtml from '../components/RawHtml';

const markup = "<div class=\"page\" data-page=\"terms\"><div class=\"wrap page-head\"><span class=\"kicker\">Terms of Service</span><h1>Simple, <span class=\"o\">fair terms.</span></h1><p>Plans are billed monthly or yearly and can be changed at any time. You own your data and your results. IntellioEra provides the agents, the infrastructure and the support to keep them running. Full terms are shared with every agreement.</p></div></div>\n\n<!-- ===================== FOOTER ===================== -->";

export default function TermsPage() {
  return <RawHtml html={markup} />;
}
