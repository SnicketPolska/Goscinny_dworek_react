import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) =>{
    const {lang} = props;
    const height = window.innerHeight;

    const [isSticky,setSticky] = useState(false);
    
    const handleScroll = () =>{
        if(window.pageYOffset >= window.innerHeight){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    })

      return <nav id="nav" className={isSticky?"sticky":""}>
          {Object.keys(lang).map((key,index) =>{
              return  <Link className="nav-box" to={`/${key}`} key={index} onClick={()=>window.scrollTo(0,height)}>
                            <h4 className="nav-text">{lang[key]}</h4>                            
                      </Link>
          })}
      </nav>
  }

  export default Nav;