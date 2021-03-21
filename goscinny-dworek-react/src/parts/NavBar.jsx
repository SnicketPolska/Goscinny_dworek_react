import HamburgerMenu from '../components/HamburgerMenu';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const NavBar = ({lang}) =>{

    const [open,setOpen] = useState(false);
    const height = window.innerHeight;

    const handleMenu = () =>{
        setOpen(!open);
    }

    return <div id="navbar" style={open?{transform:"translateX(300px)"}:{}}>
        <HamburgerMenu open={open} onClick={handleMenu}></HamburgerMenu>
        {Object.keys(lang).map((key,index) =>{
        return  <Link className="navbar-div" to={`/${key}`} key={index} onClick={()=>{window.scrollTo(0,height);setOpen(false)}}>
                      {lang[key].toUpperCase()}                           
                </Link>
    })}
  </div>
}

export default NavBar;