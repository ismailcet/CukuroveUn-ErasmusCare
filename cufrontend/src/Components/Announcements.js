import React from "react";

const Announcements = () => {
  return (
    <section className="announcements w-[780px]">
      <div className="left-title">
        <h3>ANNOUNCEMENTS / DUYURULAR</h3>
      </div>
      <div className="announcements-content">
        <div className="item">
          <div className="item-title">
            Fransa'nın Ankara Büyükelçiliği - La France en Turquie
          </div>
          <div className="item-content">
            <a href="https://tr.ambafrance.org/-Turkce-" target="_blank">
              https://tr.ambafrance.org/-Turkce-
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item-title">
            Polonya Cumhuriyeti İstanbul Başkonsolosluğu
          </div>
          <div className="item-content">
            <a
              href="https://www.gov.pl/web/turkiye/polonya-cumhuriyeti-istanbul-baskonsoloslugu"
              target="_blank"
            >
              https://www.gov.pl/web/turkiye/polonya-cumhuriyeti-istanbul-baskonsoloslugu
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item-title">İspanya Büyükelçiliği</div>
          <div className="item-content">
            <a href="https://www.exteriores.gob.es/Embajadas/ankara/tr/Paginas/index.aspx">
              https://www.exteriores.gob.es/Embajadas/ankara/tr/Paginas/index.aspx
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item-title">ROMANYA BAŞKONSOLOSLUĞU İstanbul</div>
          <div className="item-content">
            <a href="https://istanbul.mae.ro/tr">https://istanbul.mae.ro/tr</a>
          </div>
        </div>
        <div className="item">
          <div className="item-title">
            Prag Büyükelçiliği: T.C. Dışişleri Bakanlığı
          </div>
          <div className="item-content">
            <a href="http://prag.be.mfa.gov.tr/">http://prag.be.mfa.gov.tr/</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
