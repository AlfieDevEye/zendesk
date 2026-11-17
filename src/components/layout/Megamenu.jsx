import StaticItem from "../ui/StaticItem.jsx";
import StaticButton from "../ui/StaticButton.jsx";

export default function MegaMenu({ menu }) {
  if (!menu) return null;
  return (
    <div id="mega-panel" className="mega-panel d-none d-lg-block">
      <div className="container-xxl py-4">
        {/* optional featured block across the top (Platform) */}
        {menu.top && (
          <div className="mega-top pb-3 mb-4">
            <StaticItem as="div" className="d-block">
              <div className="mega-title">{menu.top.title}</div>
              <p className="mb-0 text-secondary">{menu.top.text}</p>
            </StaticItem>
          </div>
        )}

        <div className="row g-4">
          {menu.columns.map((col, i) => (
            <div key={i} className={`col-lg-${col.span}`}>
              {col.heading && <div className="mega-heading mb-3">{col.heading}</div>}
              <div className="d-flex flex-column gap-3">
                {col.items.map((it, j) => (
                  <StaticItem key={j} as="div" className="mega-item d-block">
                    <div className="mega-title">{it.title}</div>
                    {it.desc && <div className="small text-secondary">{it.desc}</div>}
                  </StaticItem>
                ))}
              </div>
            </div>
          ))}

          {menu.promo && (
            <div className="col-lg-3">
              <div className="card border-0 section-soft h-100">
                <img
                  src={menu.promo.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="mega-title mb-1">{menu.promo.title}</div>
                  <p className="small text-secondary">{menu.promo.text}</p>
                  <StaticButton variant="outline-ink" className="btn-sm">
                    {menu.promo.button}
                  </StaticButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}