import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { nav } from "../../data/nav.js";
import StaticItem from "../ui/StaticItem.jsx";
import StaticButton from "../ui/StaticButton.jsx";

function Item({ item }) {
  const chevron = item.mega ? <span className="ms-1 small">▾</span> : null;
  if (item.to) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) => "nav-item-link" + (isActive ? " active" : "")}
      >
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky-top bg-white border-bottom">
      <div className="container-xxl d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="logo-text text-decoration-none">
            {nav.logoText}
          </Link>

          {/* desktop items */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {nav.items.map((item) => (
              <Item key={item.label} item={item} />
            ))}
          </nav>
        </div>

        {/* desktop right side */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <StaticItem className="nav-item-link">{nav.signIn}</StaticItem>
          <StaticButton variant="outline-ink">{nav.viewDemo}</StaticButton>
          <Link to="/contact" className="btn btn-cta">
            {nav.contact}
          </Link>
        </div>

        {/* mobile toggle */}
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

      {/* mobile panel */}
      {open && (
        <div id="mobile-panel" className="d-lg-none border-top bg-white">
          <div className="container-xxl py-3 d-flex flex-column gap-3">
            {nav.items.map((item) => (
              <Item key={item.label} item={item} />
            ))}
            <StaticItem className="nav-item-link">{nav.signIn}</StaticItem>
            <div className="d-flex flex-wrap gap-2">
              <StaticButton variant="outline-ink">{nav.viewDemo}</StaticButton>
              <Link to="/contact" className="btn btn-cta" onClick={() => setOpen(false)}>
                {nav.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}