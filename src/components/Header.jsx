import { useAuth } from "../context/AuthContext";


export default function Header() {

    const {user, logout} = useAuth();

  return (
    <>
      <header className="nav">
        <div className="flare" id="flare"></div>
        <a href="#/" className="brand">
          Intellio<b>Era</b>
        </a>
        <ul id="topnav">
          <li><a className="top" href="#/">Home</a></li>
          <li><a className="top" href="#/about">About Us</a></li>
          <li>
            <a className="top" href="#solutions">
              Products
              <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </a>
            <div className="dd">
              <div className="ttl">INTELLIGENT PRODUCTS</div>
              <div id="ddItems"></div>
              <a className="all" href="#solutions">
                View all products
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </li>
          <li><a className="top" href="#/solutions">Solutions</a></li>
          <li><a className="top" href="#/pricing">Pricing</a></li>
          <li><a className="top" href="#/compare">Growth</a></li>
          <li>
            <a className="top" href="#/contact">
              More
              <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </a>
            <div className="dd small">
              <div className="ttl">MORE</div>
              <div id="moreItems"></div>
            </div>
          </li>
        </ul>
        <div className="nav-r">
          <div className="tsw" id="themeSw" role="button" aria-label="Toggle theme">
            <i>
              <svg className="moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
              <svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            </i>
          </div>
          <button className="tbtn" id="themeBtn" aria-label="Toggle theme" style={{ display: "none" }}>
            <svg className="moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
            <svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
          {user ? (
            <a
              className="login"
              href="#/login"
              onClick={(event) => {
                event.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          ) : (
            <a className="login" href="#/login">Sign in</a>
          )}
          <a className="btn" href="#/demo">Book a demo</a>
          <button className="burger" id="burger" type="button" aria-label="Open menu">
            <i></i><i></i><i></i>
          </button>
        </div>
      </header>
      <div className="mobile-menu" id="mobileMenu">
        <a href="#/">Home</a>
        <a href="#/about">About Us</a>
        <a href="#/solutions">Solutions</a>
        <a href="#/pricing">Pricing</a>
        <a href="#/compare">Growth</a>
        <a href="#/contact">Contact</a>
        {user ? (
          <a
            href="#/login"
            onClick={(event) => {
              event.preventDefault();
              logout();
            }}
          >
            Logout
          </a>
        ) : (
          <a href="#/login">Sign in</a>
        )}
        <a href="#/demo">Book a demo</a>
      </div>
    </>
  );
}
