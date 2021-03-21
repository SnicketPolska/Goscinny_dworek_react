const TextParser = ({text}) =>{
    
    let array = text.split(/(<strong\s*>|<\/strong\s*>)/);
    array = array.filter(word => !(word.includes("strong")))

    return <p>
        {array.map((text,index)=>{
           return (index+1)%2===0?<strong>{text}</strong>:<span>{text}</span>;
        })}
    </p>

}

export default TextParser;