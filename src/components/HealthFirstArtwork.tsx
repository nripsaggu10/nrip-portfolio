export default function HealthFirstArtwork() {
  return (
    <>
      <div
        className="project-art health-art"
        role="img"
        aria-label="Illustrative interface concept for HealthFirst"
      >
        <div className="art-caption">
          <span>HEALTHFIRST</span>
          <span>INTERFACE CONCEPT</span>
        </div>
        <div className="health-window">
          <div className="health-header">
            <span className="health-brand">
              <b aria-hidden="true">+</b> HealthFirst
            </span>
            <span className="health-avatar" aria-hidden="true">
              HF
            </span>
          </div>
          <div className="health-content">
            <p className="mini-label">A MORE CONNECTED CARE EXPERIENCE</p>
            <h4>
              Care starts
              <br />
              with a conversation.
            </h4>
            <div className="health-modules">
              <div className="health-chat">
                <span className="health-icon" aria-hidden="true">
                  ✳
                </span>
                <p>
                  How can we help
                  <br />
                  you feel better?
                </p>
                <div className="chat-line">
                  Tell us how you’re feeling <span aria-hidden="true">↗</span>
                </div>
              </div>
              <div className="health-record">
                <span className="mini-label">PATIENT RECORDS</span>
                <div className="record-lines" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="record-status">
                  <span aria-hidden="true">✓</span> Connected care
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
