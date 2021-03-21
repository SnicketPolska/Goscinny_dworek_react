import {BrowserRouter as Router} from 'react-router-dom';
import './assets/App.css';
import {useEffect,useState} from 'react';
import Server from './serviceworker.js';
import images from './data/images.js';
import Header from './parts/Header';
import Main from './parts/Main';
import Footer from './parts/Footer';

function App() {

  const [lang,setLang] = useState({});
  const [chosenLang,setChosenLang] = useState('pl');

  useEffect(()=>{
    Server.getLang(chosenLang).then(data => setLang(data));
  },[chosenLang])

  return lang.Main !== undefined? 
  <div id="App">
      <Router>
        <Header lang={lang.Header} changeLang={setChosenLang} images={images.Header} svg={images.svg}></Header>
        <Main lang={lang.Main} images={images.Main} svg={images.svg}></Main>
        <Footer lang={lang.Footer} svg={images.svg}></Footer>
      </Router>
    </div>
    :
    <div></div>
  
}

export default App;
