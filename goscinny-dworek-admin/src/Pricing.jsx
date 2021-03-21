import {useState,useEffect} from 'react';
import Server from './serviceworker.js';

const Pricing = ({lang}) =>{
    const [tables,setTables] = useState({});

    useEffect(()=>{
      Server.getTables().then(response => setTables(response));
    },[]);

    const changeValue  = (target) =>{
      return (row,index) =>{
        return (e) =>{
          let newTable = Object.assign({},tables);
          newTable[target][row][index] = e.target.value;
          setTables(newTable);
        }
      }
    }

    return tables.hasOwnProperty('Rooms') ? <div id="pricing">
    <h3 className="centered">{lang.title}</h3>
    <h3 className="bony">{lang.caption}</h3>
    <Table lang={lang.Table.Rooms} changeValue={changeValue("Rooms")} tables={tables.Rooms}></Table>
    <Table lang={lang.Table.Cottages} changeValue={changeValue("Cottages")} tables={tables.Cottages}></Table>
    <button onClick={()=>Server.updateTables(tables)}>ZAPISZ</button>
    </div> : <p>BŁĄD NIE MOŻNA ODEBRAĆ DANYCH</p>
  }
  
  const Table = ({lang,tables,changeValue}) =>{
  
   return <table>
              <caption>
                {lang.caption}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{lang.rows[0]}</th>
                  <th scope="col">
                    {lang.holiday}<br />
                    <input type="text" defaultValue={tables[0][0]} onChange={changeValue(0,0)} />
                  </th>
                  <th scope="col"><input type="text" defaultValue={tables[0][1]} onChange={changeValue(0,1)} /></th>
                  <th scope="col"><input type="text" defaultValue={tables[0][2]} onChange={changeValue(0,2)} /></th>
                  <th scope="col"><input type="text" defaultValue={tables[0][3]} onChange={changeValue(0,3)} /></th>
                </tr>
              </thead>
              <tbody>
                {lang.rows.map((row,index) =>{
                  if(index !== 0){
                    return <tr key={index}>
                    <th scope="row">{row}</th>
                    <td>{<input type="number" defaultValue={tables[index][0]} onChange={changeValue(index,0)}></input>}</td>
                    <td>{<input type="number"  defaultValue={tables[index][1]} onChange={changeValue(index,1)}></input>}</td>
                    <td>{<input type="number"  defaultValue={tables[index][2]} onChange={changeValue(index,2)}></input>}</td>
                    <td>{<input type="number"  defaultValue={tables[index][3]} onChange={changeValue(index,3)}></input>}</td>
                  </tr>
                  }else{
                    return null;
                  }
                })}
              </tbody>
            </table>
  }

  export default Pricing;