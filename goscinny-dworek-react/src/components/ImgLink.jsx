import {Link} from 'react-router-dom';

const ImgLink = ({alt,img,path}) =>{
  const height=window.innerHeight;
    return <Link to={path} onClick={()=>window.scrollTo(0,height)}>
    <img
      src={img}
      alt={alt}
      className="quicknav-img"
    />
  </Link>
}

export default ImgLink;