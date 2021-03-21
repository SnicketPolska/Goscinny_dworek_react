import ImgLink from '../components/ImgLink.jsx';

const QuickNav = (props) =>{
    const {lang,svg,changeLang} = props;
      const otherLang = lang.otherLang.toUpperCase();
      return <div id="quicknav">
        <button onClick={() => changeLang(otherLang)} className="quicknav-btn" id={otherLang}>{otherLang}</button> 
          <ImgLink text={lang.alt[0]} img={svg[0]} path="/contact" ></ImgLink>
          <ImgLink text={lang.alt[1]} img={svg[1]} path="/contact"></ImgLink>
          <ImgLink text={lang.alt[2]} img={svg[2]} path="/contact"></ImgLink>
    </div>
  }

  export default QuickNav;