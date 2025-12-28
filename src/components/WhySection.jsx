import "../styles/WhySection.css";

export default function WhySection() {
  return (
    <>
      <section className="why-section">
        <div className="why-section-content">
          <div className="why-image">
            <img
              src="http://static.wixstatic.com/media/887f92_37efe33b573142dab8220b347ae1c37e~mv2.jpg/v1/fill/w_832,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/887f92_37efe33b573142dab8220b347ae1c37e~mv2.jpg"
              alt="why-image"
            />
            <span>
              <h1>mengapa anda harus pilih kami ?</h1>
            </span>
          </div>
          <div className="why-text">
            <p>Transformasi Nyata</p>
            <p>
              Mulailah perjalanan transformasimu dengan bimbingan coach
              profesional yang selalu siap mendampingi. Progresmu akan selalu
              dipantau secara rutin setiap saat.
            </p>
            <p>Program Efektif</p>
            <p>
              Rasakan pengalaman workout dan tantangan yang dirancang
              menyenangkan serta efektif, dipadukan dengan panduan nutrisi
              seimbang dan produk berkualitas tinggi.
            </p>
            <p>Komunitas Suportif</p>
            <p>
              Bergabunglah dengan komunitas yang suportif, inspiratif dan
              dapatkan akses ke sesi coaching langsung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
