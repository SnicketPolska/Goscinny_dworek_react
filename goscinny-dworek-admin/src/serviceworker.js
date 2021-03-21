import axios from 'axios';

const Server = (() =>{

    function getTables(){
       return axios
      .get('/data/tables')
      .then(response => response.data);
    }

    function updateTables(tables){
      return axios.put('/data/tables',tables).then(res=>console.log(res.data));
    }

    function getLang(lang){
        return axios
        .get(`/data/lang/${lang}`)
        .then(response=> response.data);
    }

    return {getTables,updateTables, getLang}

})();

export default Server