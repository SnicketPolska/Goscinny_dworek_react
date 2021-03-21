import TextParser from '../components/TextParser';

const Pobierowo = ({lang}) =>{
    return <div id="pobierowo">
      <h3 className="centered">POBIEROWO</h3>
      <TextParser text={lang.text}></TextParser>
    </div>
  }


  export default Pobierowo;