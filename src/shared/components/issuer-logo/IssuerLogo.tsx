import anthropic from "./assets/anthropic.png";
import isc2 from "./assets/isc2.svg";
import standardChartered from "./assets/standard-chartered.png";
import "../../styles/institution-images.css";
import "./IssuerLogo.css";
const issuers = {
  anthropic: { src: anthropic, name: "Anthropic" },
  isc2: { src: isc2, name: "ISC2" },
  "standard-chartered": { src: standardChartered, name: "Standard Chartered" },
};
export default function IssuerLogo({
  issuer,
}: {
  issuer: keyof typeof issuers;
}) {
  const logo = issuers[issuer];
  return (
    <div className={`issuer-logo issuer-logo--${issuer} institution-image`}>
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        width="100"
        height="100"
        decoding="async"
      />
    </div>
  );
}
