import {useEffect,useState} from 'react';
import Server from '../serviceworker';
import TextParser from '../components/TextParser';

const Pricing = (props) =>{
    const {lang} = props;
    const [tables,setTables] = useState({});

    useEffect(()=>{
      Server.getTables().then(response => setTables(response));
    },[]);
  
    return tables.hasOwnProperty('Rooms') ? <div id="pricing">
    <h3 className="centered">{lang.title}</h3>
    <h3 className="bony">{lang.caption}</h3>
    <Table lang={lang.Table.Rooms} tables={tables.Rooms}></Table>
    <Table lang={lang.Table.Cottages} tables={tables.Cottages}></Table>
    <TextParser text={lang.text}></TextParser> </div>: <div>Nie można odczytać danych</div>
  }
  
  const Table = ({lang,tables}) =>{
  
   return <table>
              <caption>
                {lang.caption}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{lang.rows[0]}</th>
                  <th scope="col">
                    {lang.holiday}<br />
                    {tables[0][0]}
                  </th>
                  <th scope="col">{tables[0][1]}</th>
                  <th scope="col">{tables[0][2]}</th>
                  <th scope="col">{tables[0][3]}</th>
                </tr>
              </thead>
              <tbody>
                {lang.rows.map((row,index) =>{
                  if(index !== 0){
                    return <tr key={index}>
                    <th scope="row">{row}</th>
                    <td>{tables[index][0] + lang.currency}</td>
                    <td>{tables[index][1] + lang.currency}</td>
                    <td>{tables[index][2] + lang.currency}</td>
                    <td>{tables[index][3] + lang.currency}</td>
                  </tr>
                  }else{
                    return null;
                  }
                })}
              </tbody>
            </table>
  }

  export default Pricing;