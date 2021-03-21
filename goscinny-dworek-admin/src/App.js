import Pricing from './Pricing';
import Server from './serviceworker.js';
import {useEffect,useState} from 'react';

function App() {

  const [lang,setLang] = useState({});

  useEffect(()=>{
    Server.getLang('pl').then(response => setLang(response));
  },[])

  return (lang.Main !== undefined ? <div className="App">
      <Pricing lang={lang.Main.Pricing}></Pricing>
    </div>:<div></div>);
}

export default App;
