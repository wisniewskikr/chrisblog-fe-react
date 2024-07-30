import { useEffect } from "react";

const ListMainArticlesArticle = (props) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = './../../../../../assets/js/main.js';
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);

    return (
        <h2>List Main Articles Article with id: {props.article.id}</h2>
    );

}

export default ListMainArticlesArticle;