import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="about_us">
        <div className="about_us-container">
          <div className="about_us-image">
            <img
              src="https://static.wixstatic.com/media/11062b_2d254ff732c24a3bb782ef6801ecd13f~mv2.jpg/v1/fill/w_1180,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2d254ff732c24a3bb782ef6801ecd13f~mv2.jpg"
              alt=""
            />
            <div className="about_us-title">
              <h1>Tentang Kami</h1>
            </div>
          </div>
          <div className="about_us-text">
            <p>
              MSC Body Transformation adalah bagian dari Mega Slim Challenge
              (MSC), sebuah program transformasi menyeluruh berbasis Power,
              Muscle, dan Nutrition. Tak sekadar menurunkan berat badan, MSC
              membantu kamu membangun tubuh yang kuat, sehat, dan penuh energi
              dengan bimbingan coach berpengalaman, program terarah, pola makan
              tepat, dan komunitas suportif yang siap mendukung setiap
              langkahmu.
            </p>
          </div>
        </div>
      </div>
      <div className="coach_profile">
        <div className="coach_profile-container">
          <div className="coach_profile-title">
            <h1>Profil Coach</h1>
            <div className="coach_profile-image">
              <img
                src="https://static.wixstatic.com/media/887f92_9ce9185f4c674d1db57d8e98901cfb16~mv2.jpeg/v1/fill/w_836,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/887f92_9ce9185f4c674d1db57d8e98901cfb16~mv2.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
