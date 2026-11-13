import { banner } from "../../data/banner.js";
import StaticButton from "../ui/StaticButton.jsx";

export default function Banner() {
  return (
    <div className="section-dark py-2">
      <div className="container-xxl d-flex flex-wrap justify-content-center align-items-center gap-3">
        <span className="small">{banner.text}</span>
        <StaticButton variant="cta" className="btn-sm py-1">
          {banner.button}
        </StaticButton>
      </div>
    </div>
  );
}
