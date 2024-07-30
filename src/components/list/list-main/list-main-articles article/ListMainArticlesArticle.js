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
        <div className="col-md-12">
            <div className="blog-entry ftco-animate d-md-flex">
                {/* TODO */}
                <a href="#" className="img img-2" style="background-image: url(https://chrisblog.s3-eu-west-1.amazonaws.com/articles/article-{{article?.id}}/main.jpg)"></a>
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
                    {/* TODO */}
                    <p className="mb-4" [innerHtml]="article?.description" ></p>
                    {/* TODO */}
                    <p><a routerLink="/article/{{article?.id}}" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
                </div>
            </div>
        </div>
    );

}

export default ListMainArticlesArticle;