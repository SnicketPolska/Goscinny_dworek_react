import { useEffect, useState, useRef } from "react";


const Article = ({lang,images}) =>{
    return <article id="article">
    <h1>
      {lang.title}
    </h1>
    <h3 className="bony">{lang.subtitle}</h3>
    {lang.ArticleElement.h2.map((value,index)=>{
        return <ArticleElement key={index}h2={value} p={lang.ArticleElement.p[index]} alt={lang.ArticleElement[index]} img={images[index]}></ArticleElement>
    })}
  </article>
}

const ArticleElement = (props) =>{
    const {h2,p,alt,img} = props;

    const [isVisible,setVisible] = useState(false);

    const ref = useRef(null);

    function handleScroll(){
      const top = ref.current.offsetTop;
      if (window.pageYOffset >= top - 0.7 * window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener("scroll",handleScroll);
    })  

    return <div ref={ref} className="article-element" style={isVisible?{opacity: 1,transform: 'none'}:{opacity:0,transform:'25%'}} >
    <img
      src={img}
      width="600"
      height="400"
      alt={alt}
    />
    <div>
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  </div>
}



export default Article;