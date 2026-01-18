import "../styles/LeaderboardSection.css";
import Button from "./ui/Button/Button";

export default function LeaderboardSection() {
  return (
    <>
      <section className="leaderboard-section">
        <div className="leaderboard-section-content">
          <div className="leaderboard-image">
            <span>
              <h1>Leaderboard</h1>
              <h2>top 5</h2>
            </span>
          </div>
          <div className="leaderboard-contestant">
            <div className="medal-image">
              <div>
                <img
                  src="https://static.wixstatic.com/media/2f5528_e18bc64d706d42e78f4679cc58170387~mv2.png/v1/fit/w_329,h_100/2f5528_e18bc64d706d42e78f4679cc58170387~mv2.png"
                  alt="medal"
                />
              </div>
              <div>
                <img
                  src="https://static.wixstatic.com/media/2f5528_bf1ec935796e4c6294bf4c2b85c4a00d~mv2.png/v1/fit/w_329,h_100/2f5528_bf1ec935796e4c6294bf4c2b85c4a00d~mv2.png"
                  alt="medal"
                />
              </div>
              <div>
                <img
                  src="https://static.wixstatic.com/media/2f5528_887ebf7b61384d188a53121086180355~mv2.png/v1/fit/w_329,h_100/2f5528_887ebf7b61384d188a53121086180355~mv2.png"
                  alt="medal"
                />
              </div>
              <div>
                <img
                  src="http://static.wixstatic.com/media/2f5528_23dd075e39f54734bfd323289dfba678~mv2.png/v1/fit/w_329,h_100/2f5528_23dd075e39f54734bfd323289dfba678~mv2.png"
                  alt="medal"
                />
              </div>
              <div>
                <img
                  src="http://static.wixstatic.com/media/2f5528_23dd075e39f54734bfd323289dfba678~mv2.png/v1/fit/w_329,h_100/2f5528_23dd075e39f54734bfd323289dfba678~mv2.png"
                  alt="medal"
                />
              </div>
            </div>
            <div className="contestant-name">
              <p>Marco Bumiputera</p>

              <p>Marco Bumiputera</p>

              <p>Marco Bumiputera</p>

              <p>Marco Bumiputera</p>

              <p>Marco Bumiputera</p>
            </div>
            <div className="contestant-score">
              <div>
                <p>12440</p>
                <p>12440</p>
                <p>12440</p>
                <p>12440</p>
                <p>12440</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            className="button-peringkat"
            text="Cek Peringkat"
          />
        </div>
      </section>
    </>
  );
}
