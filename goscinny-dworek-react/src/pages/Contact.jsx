import { useEffect } from "react";

const Contact = (props) =>{
    const {lang,svg} = props;

    useEffect(()=>{
      document.querySelector("iframe").src =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9367.802340932974!2d14.93298604642031!3d54.05688390832274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa9d16c2fe4c67%3A0xda39b07604f31c00!2sGo%C5%9Bcinny+Dworek+i+Domki+Letniskowe+-+Pobierowo+Pokoje+go%C5%9Bcinne+Noclegi+Pobierowo!5e0!3m2!1spl!2spl!4v1556265136197!5m2!1spl!2spl";
    })

    return <div id="contact">
      <div id="telephone">
        <div>
          <p>{lang.stationary + "\n+48 91 38 64 120"}</p>
          <a href="tel:+48913-864-120"><img src={svg} alt={lang.alt}/></a>
        </div>
        <div>
          <p>{lang.mobile + "\n+48 502 362 976"}</p>
          <a href="tel:+48502-362-976"><img src={svg} alt={lang.alt}/></a>
        </div>
        <div>
          <p>{lang.caption +"\n"}<strong>kazwach@wp.pl</strong></p>
        </div>
      </div>
      <iframe title="map" src="" width="680" height="450" allowFullScreen=""></iframe>
    </div>
           
  }

  export default Contact;