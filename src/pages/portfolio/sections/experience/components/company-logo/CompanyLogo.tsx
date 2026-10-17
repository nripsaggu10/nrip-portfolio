import morganStanley from "../../assets/morgan-stanley-icon.png";
import bounteous from "../../assets/bounteous-icon.png";
import adityaBirla from "../../assets/aditya-birla.png";
import "./CompanyLogo.css";
const logos = {
  "morgan-stanley": { src: morganStanley, name: "Morgan Stanley" },
  bounteous: { src: bounteous, name: "Bounteous India" },
  "aditya-birla": { src: adityaBirla, name: "Aditya Birla Group" },
};
export default function CompanyLogo({
  company,
}: {
  company: keyof typeof logos;
}) {
  const logo = logos[company];
  return (
    <div className={`company-logo company-logo--${company}`}>
      <img src={logo.src} alt={`${logo.name} logo`} decoding="async" />
    </div>
  );
}
