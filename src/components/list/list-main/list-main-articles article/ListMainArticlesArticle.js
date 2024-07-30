import { useEffect } from "react";
import { Link } from "react-router-dom";

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

    const inlineStyles = {
        backgroundImage: {
            backgroundImage: `url(https://chrisblog.s3-eu-west-1.amazonaws.com/articles/article-${props.article.id}/main.jpg)`,
        },
    };

    return (
        <div className="col-md-12">
            <div className="blog-entry ftco-animate d-md-flex">
                <span className="img img-2" style={inlineStyles.backgroundImage}/>
                {/* <a href="#" className="img img-2" style={inlineStyles.backgroundImage}></a> */}
                <div className="text text-2 pl-md-4">
                    <h3 className="mb-2"><a href="#"><span> {props.article.title} </span></a></h3>
                    <div className="meta-wrap">
                        <p className="meta">
                            <span><i className="icon-calendar mr-2"></i><span> {props.article.date} </span></span>
                            <span><i className="icon-person mr-2"></i><span> {props.article.author} </span></span>
                            {/* TODO*/}
                            {/* <span><i className="icon-folder mr-2"></i><span> {{article.category.name}} </span></span> */}
                        </p>
                    </div>
                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: props.article.description }} ></p>
                    <p><Link to="/article/{props.article.id}" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></Link></p>
                </div>
            </div>
        </div>
    );

}

export default ListMainArticlesArticle;