import rules from "../regulamin.pdf";
import rodo from "../rodo.pdf"

const Footer = (props) =>{
  const {lang,svg} = props;
    return <footer>
    <div className="footer-div">
      <img
        src={svg[1]}
        alt={lang.alt[1]}
        className="footer-svg"
      />
      <p>
        {lang.contact}
      </p>
    </div>
    <div className="footer-div">
      <img
        src={svg[2]}
        alt={lang.alt[2]}
        className="footer-svg"
      />
      <p>
        {lang.company}
      </p>
    </div>
    <div className="footer-div">
      <a href={rodo} target="_blank"id="rodo" rel="noreferrer">RODO</a>
      <a href={rules} target="_blank" id="rules" rel="noreferrer">{lang.rules}</a>
    </div>
  </footer>

}

export default Footer;