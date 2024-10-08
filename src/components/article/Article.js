import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getArticleApiUrl } from '../utils/Utils';

const Article = () => {

    let { id } = useParams(); 
    const [title, setTitle] = useState("Title");
    const [date, setDate] = useState("Date");
    const [author, setAuthor] = useState("Author");
    const [description, setDescription] = useState("Description (Inner HTML)");
    const [template, setTemplate] = useState("CONTENT");
    const [content, setContent] = useState("Content (Inner HTML)");
    const [url, setUrl] = useState("https://www.google.com");
    const articleUrl = getArticleUrl();
    const descriptionContent = getDescriptionContent(); 
    const navigate = useNavigate();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = './../../../assets/js/main.js';
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

      useEffect(() =>{

        const fetchData = async () => {
    
          try {

            const pathParams = {'id': id};
            const articleUrl = getArticleApiUrl(pathParams);
            const response = await fetch(articleUrl);

            if (!response.ok) {
                const text = JSON.stringify(response.text());
                throw new Error(`HTTP error! Status: ${response.status}. Message: ${text}.`);
            }

            const result = await response.json();
            setTitle(result.title);
            setDate(result.date);
            setAuthor(result.author);
            setDescription(result.description);
            setTemplate(result.template);
            setContent(result.content);
            setUrl(result.url);

          } catch (error) {
            console.error('An error occurred:', error);
          }
    
        };
    
        fetchData();
    
      }, [id]); 
      
      const handleGoBack = () => {
        navigate(-1);
      };

    return(        
        <div id="colorlib-page">
            <form>
                    
                <div id="colorlib-main" className="article">
                    <div className="container">	    			
                            <div className="col-lg-12 px-md-7 py-7">
                            
                                <span className=" d-none d-xl-block">
                                    <p className="blog-img">
                                        <Link to="/">
                                            <img src="https://chrisblog.s3-eu-west-1.amazonaws.com/common/chris_blog.png" alt="" className="img-fluid"/>
                                        </Link>
                                    </p>
                                </span>	

                                <div className="nav d-flex align-items-center full-height">
                                    <Link to="/">
                                        <span className="nav-item">Home</span>
                                    </Link>
                                    <Link to="/about">
                                        <span className="nav-item">About Me</span>
                                    </Link>
                                </div>

                                <div className="row articleSection pt-md-4 articleBanner d-flex align-items-center justify-content-center full-height"	    					
                                    style={inlineStyles.backgroundImage}
                                    >
                                    <div className="col-lg-12 px-md-7 py-7" >
                                        <div className="row articleSection d-flex align-items-center justify-content-center full-height ">
                                            <div className="mb-3 articleBannerText" > {title} </div>
                                        </div>
                                        <div className="row articleSection meta-wrap">
                                            <p>
                                                <span className="icon-wrap"><i className="icon-calendar mr-2"></i> {date} </span>
                                                <span className="icon-wrap"><i className="icon-person mr-2"></i> {title} </span>                                                
                                            </p>
                                        </div>
                                    </div>
                                </div> 

                                <span className="d-none d-xl-block">
                                    <div className="avatarIcon">
                                        <div className="avatar">
                                            <img src="https://chrisblog.s3-eu-west-1.amazonaws.com/common/none.png" alt=""/>
                                        </div>
                                        <span className="author_name">By: <b> {author} </b> </span>
                                    </div>
                                </span>	

                                <hr className="line d-none d-xl-block"/>						
                                    
                                <h2 className="mb-3 mt-5 articleSectionTitle">Introduction</h2>
                                <div className="row articleSection pt-md-4" dangerouslySetInnerHTML={{ __html: description }}/>
                                
                                <p className="article-img">
                                    <img src={articleUrl} alt="" className="img-fluid"/>
                                </p>

                                {descriptionContent}

                                <div className="form-group article-button">
                                    <Link onClick={handleGoBack} className="btn py-3 px-4 btn-primary">Go Back</Link>
                                </div>       
                            
                            </div>
                        </div>    	
                    </div>
            </form>	
        </div>
    );

    function getArticleUrl() {
        return "https://chrisblog.s3-eu-west-1.amazonaws.com/articles/article-" + id + "/main.jpg";
    }

    function getDescriptionContent() {

        let descriptionContent = null;

        if (template === 'CONTENT') {
            descriptionContent =    <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Description</h2>	
                                        <div className="row articleSection pt-md-4" dangerouslySetInnerHTML={{ __html: content }} />	
                                    </span>;
        } else if (template === 'LINK_ALBUM') {
            descriptionContent =   <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Google Album</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            Pictures from this area you can find in my
                                            <a href={url} target="blank">Google Album</a>.
                                        </div>
                                    </span>;
        } else if (template === 'LINK_DOCUMENT') {
            descriptionContent =   <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Google Document</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            More details about this topic you can find in my 
                                            <a href={url} target="blank">Google Document</a>.
                                        </div> 
                                    </span>;
        } else if (template === 'LINK_GITHUB') {
            descriptionContent =   <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Github Repository</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            Source Code with explanation you can find in my 
                                            <a href={url} target="blank">Github Repository</a>.
                                        </div>
                                    </span>;
        } else if (template === 'LINK_YOUTUBE') {
            descriptionContent =   <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">YouTube Channel</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            More details about this topic you can find on my
                                            <a href={url} target="blank">YouTube Channel</a>.
                                        </div>
                                    </span>;
        }

        return descriptionContent;

    }

}

const inlineStyles = {
    backgroundImage: {
        backgroundImage: "url(https://chrisblog.s3-eu-west-1.amazonaws.com/banner/Books/banner.jpg)",
    },
};

export default Article;