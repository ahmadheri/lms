import "../styles/ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div className="contact_us-section">
        <div className="contact_us-container">
          <div className="contact_us-image">
            <span>
              <h1>kontak kami</h1>
            </span>
          </div>
        </div>
        <div className="contact_us-content">
          <span>
            <h3>Alamat</h3>
            <p>
              Jl. A. Wahab Syahranie, Sidodadi, Kec. Samarinda Ulu, Kota
              Samarinda, Kalimantan Timur 75243
            </p>
          </span>
          <span>
            <h3>Kontak</h3>
            <p>Coach Budi Maydhika : 081347124257 </p>
          </span>
          <span>
            <h3>Media Sosial</h3>
            <img
              src="https://static.wixstatic.com/media/2f5528_f4eaf9e6c97944559e987df88a1dca3e~mv2.png/v1/fill/w_94,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/78ec584ad22b96232ef581f0ee7fdb1f-removebg-preview.png"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/2f5528_06ded8ba6db6476f8852d5b433a11fc0~mv2.png/v1/fill/w_94,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tiktok.png"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/2f5528_753ad46c5a9b461dbc670840355e4f70~mv2.png/v1/fill/w_116,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sm_5b0125144fcc9-removebg-preview.png"
              alt=""
            />
          </span>
        </div>
        <div className="contact_us-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.2834556027873!2d117.13878175298393!3d-0.46713906326883436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f31fc93dcf3%3A0xb7c38e18191d5fec!2sMajesty%20Sport%20Center%20Samarinda!5e0!3m2!1sen!2sid!4v1767136700861!5m2!1sen!2sid"
            width="1200"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
