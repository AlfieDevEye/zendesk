import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav } from "../../data/nav.js";
import StaticItem from "../ui/StaticItem.jsx";
import StaticButton from "../ui/StaticButton.jsx";
import MegaMenu from "./MegaMenu.jsx";

function Chevron({ open }) {
  return <span className={"ms-1 small chev" + (open ? " open" : "")}>▾</span>;
}

function DesktopItem({ item, active, setActive }) {
  const isOpen = active === item.label;
  const hoverProps = {
    onMouseEnter: () => setActive(item.mega ? item.label : null),
    onFocus: () => setActive(item.mega ? item.label : null),
  };

  if (item.to) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          "nav-item-link" + (isActive ? " active" : "") + (isOpen ? " open" : "")
        }
        onClick={() => setActive(null)}
        {...hoverProps}
      >
        {item.label}
        {item.mega && <Chevron open={isOpen} />}
      </NavLink>
    );
  }

  if (item.mega) {
    return (
      <button
        type="button"
        className={"nav-item-link nav-trigger" + (isOpen ? " open" : "")}
        aria-expanded={isOpen}
        aria-controls="mega-panel"
        onClick={() => setActive(item.label)}
        {...hoverProps}
      >
        {item.label}
        <Chevron open={isOpen} />
      </button>
    );
  }

  return <StaticItem className="nav-item-link">{item.label}</StaticItem>;
}

function MobileItem({ item }) {
  const chevron = item.mega ? <span className="ms-1 small">▾</span> : null;
  if (item.to) {
    return (
      <NavLink to={item.to} className="nav-item-link">
        {item.label}
        {chevron}
      </NavLink>
    );
  }
  return (
    <StaticItem className="nav-item-link">
      {item.label}
      {chevron}
    </StaticItem>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile panel
  const [active, setActive] = useState(null); // desktop mega menu
  const { pathname } = useLocation();

  // close menus on route change
  useEffect(() => {
    setActive(null);
    setOpen(false);
  }, [pathname]);

  // Esc closes the mega menu
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky-top bg-white border-bottom" onMouseLeave={() => setActive(null)}>
      <div className="container-xxl d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="logo-text text-decoration-none">
            {nav.logoText}
          </Link>

          <nav className="d-none d-lg-flex align-items-center gap-4">
            {nav.items.map((item) => (
              <DesktopItem key={item.label} item={item} active={active} setActive={setActive} />
            ))}
          </nav>
        </div>

        <div
          className="d-none d-lg-flex align-items-center gap-3"
          onMouseEnter={() => setActive(null)}
        >
          <StaticItem className="nav-item-link">{nav.signIn}</StaticItem>
          <StaticButton variant="outline-ink">{nav.viewDemo}</StaticButton>
          <Link to="/contact" className="btn btn-cta">
            {nav.contact}
          </Link>
        </div>

        <button
          type="button"
          className="btn btn-outline-ink d-lg-none"
          aria-expanded={open}
          aria-controls="mobile-panel"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* desktop mega menu */}
      {active && <MegaMenu menu={nav.menus[active]} />}

      {/* mobile panel (accordions come in a later step) */}
      {open && (
        <div id="mobile-panel" className="d-lg-none border-top bg-white">
          <div className="container-xxl py-3 d-flex flex-column gap-3">
            {nav.items.map((item) => (
              <MobileItem key={item.label} item={item} />
            ))}
            <StaticItem className="nav-item-link">{nav.signIn}</StaticItem>
            <div className="d-flex flex-wrap gap-2">
              <StaticButton variant="outline-ink">{nav.viewDemo}</StaticButton>
              <Link to="/contact" className="btn btn-cta">
                {nav.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}