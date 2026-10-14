export default function BlogDetailsPage() {
  return (
    <div className="page" data-page="blog-details">
      <section className="blog-detail-hero">
        <div className="wrap blog-detail-hero-grid">
          <div className="blog-detail-copy">
            <a className="blog-back" href="#/blogs">
              <svg viewBox="0 0 24 24">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Back to insights
            </a>
            <div className="blog-detail-kicker" id="detailCategory">
              AUTOMATION
            </div>
            <h1 id="detailTitle">What an AI manager actually does at 9 pm</h1>
            <p className="blog-detail-dek" id="detailIntro"></p>
            <div className="blog-detail-meta">
              <span id="detailDate">18 Sep 2026</span>
              <i></i>
              <span id="detailRead">6 min read</span>
              <i></i>
              <span>IntellioEra intelligence desk</span>
            </div>
          </div>
          <div className="blog-signal-card">
            <div className="signal-top">
              <span>INTELLIGENCE NOTE</span>
              <b>IE / 026</b>
            </div>
            <div className="signal-grid"></div>
            <div className="signal-orbit signal-orbit-a"></div>
            <div className="signal-orbit signal-orbit-b"></div>
            <div className="signal-icon" id="detailIcon"></div>
            <span className="signal-label">
              SYSTEMS THAT<br /><b>KEEP MOVING</b>
            </span>
          </div>
        </div>
      </section>
      <section className="sec blog-detail-section">
        <div className="wrap blog-detail-layout">
          <aside className="blog-detail-aside">
            <span className="article-rail-label">THE FIELD NOTE</span>
            <div className="article-rail-rule"></div>
            <div className="blog-progress">
              <span>READING PROGRESS</span>
              <i id="detailProgress"></i>
            </div>
            <a className="blog-detail-cta" href="#/demo">
              Make your workflow intelligent
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </aside>
          <article className="blog-article" id="blogArticle"></article>
        </div>
      </section>
      <section className="sec related-section">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Keep exploring</span>
            <h2>
              More ideas for <span className="o">intelligent work.</span>
            </h2>
          </div>
          <div className="related-grid" id="relatedBlogs"></div>
        </div>
      </section>
    </div>
  );
}
