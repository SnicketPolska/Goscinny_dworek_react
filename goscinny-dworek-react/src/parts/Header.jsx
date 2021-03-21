import Nav from './Nav';
import NavBar from './NavBar';
import QuickNav from './QuickNav';
import {useEffect,useState} from 'react';



const Header = (props) =>{
  const {lang,svg,images,changeLang} = props;
  const height = window.innerHeight;
  const mq800 = window.matchMedia("(max-width: 800px)").matches;

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(slider === 2){
        setSlider(0);
      }else{
        setSlider(slider => slider + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);
  
    return <header style={mq800&&slider===1?{backgroundImage: `url(${images[slider]})`,backgroundPositionX: '25%'}:{backgroundImage: `url(${images[slider]})`}}>
        <QuickNav lang={lang.QuickNav} changeLang={changeLang} svg={svg}></QuickNav>
        {
        mq800?
        <NavBar lang={lang.Nav}></NavBar>  
        :
        <Nav lang={lang.Nav}></Nav>
        } 
    <h2 id="header-title">{lang.title}</h2>
    <button id="header-link" onClick={() => window.scrollTo(0, height)}>{lang.link}</button>
  </header>
}

export default Header;