import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Article = () => {

    let { id } = useParams(); 

    useEffect(() => {
        const script = document.createElement('script');
        script.src = './../../../assets/js/main.js';
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return(
        <>Id: {id}</>
    );

}

export default Article;