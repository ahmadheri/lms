import "./ChampionSection.css";

export default function ChampionSection() {
  return (
    <>
      <section className="champion-section">
        <div className="champion-section-content">
          <div className="champion-image">
            <span>
              <h1>msc</h1>
              <h2>champion</h2>
            </span>
          </div>
        </div>
        <div className="champion-winner">
          <div className="champion-winner-image">
            <img
              src="https://static.wixstatic.com/media/887f92_7ec6889883d148c18b1f2061afbaf4ae~mv2.png/v1/fill/w_671,h_839,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/887f92_7ec6889883d148c18b1f2061afbaf4ae~mv2.png"
              alt="champion-winner"
            />
          </div>
        </div>
      </section>
    </>
  );
}
