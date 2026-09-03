import RawHtml from './RawHtml';

const markup = "<div class=\"bg-grid\"></div>\n<div class=\"bg-glow\"><span class=\"g1\"></span><span class=\"g2\"></span></div>\n<div class=\"bg-rings\"><i></i><i></i><i></i></div>\n<div class=\"bg-beam\"></div><div class=\"bg-beam b2\"></div>\n<canvas id=\"circuit\"></canvas>";

export default function Background() {
  return <RawHtml html={markup} />;
}
