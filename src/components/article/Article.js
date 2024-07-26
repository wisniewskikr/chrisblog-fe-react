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

    const title = "Title";
    const date = "Date";
    const author = "Author";
    const description = "Description (Inner HTML)";
    const template = "CONTENT";
    const content = "Content (Inner HTML)";
    const url = "https://www.google.com";

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
                                    style="background-image: url(https://chrisblog.s3-eu-west-1.amazonaws.com/banner/Books/banner.jpg);"
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
                                <div className="row articleSection pt-md-4" > {description} </div>
                                
                                <p className="article-img">
                                    {/* TODO */}
                                    <img src="https://chrisblog.s3-eu-west-1.amazonaws.com/articles/article-1/main.jpg" alt="" className="img-fluid"/>
                                </p>

                                if ({template} == 'CONTENT') {
                                    <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Description</h2>	
                                        <div className="row articleSection pt-md-4" > {content} </div>	
                                    </span>
                                }

                                if ({template} == 'LINK_ALBUM') {
                                    <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Google Album</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            Pictures from this area you can find in my
                                            <a href={url} target="blank">Google Album</a>.
                                        </div>
                                    </span>	
                                }

                                if ({template} == 'LINK_DOCUMENT') {
                                    <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Google Document</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            More details about this topic you can find in my 
                                            <a href={url} target="blank">Google Document</a>.
                                        </div> 
                                    </span> 
                                }

                                if ({template} == 'LINK_GITHUB') {
                                    <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">Github Repository</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            Source Code with explanation you can find in my 
                                            <a href={url} target="blank">Github Repository</a>.
                                        </div>
                                    </span>
                                }

                                if ({template} == 'LINK_YOUTUBE') {
                                    <span>
                                        <h2 className="mb-3 mt-5 articleSectionTitle">YouTube Channel</h2>				            
                                        <div className="row articleSection pt-md-4">
                                            More details about this topic you can find on my
                                            <a href={url} target="blank">YouTube Channel</a>.
                                        </div>
                                    </span>
                                } 

                                <div className="form-group article-button">
                                    <Link to="/" className="btn py-3 px-4 btn-primary">Go Back</Link>
                                </div>       
                            
                            </div>
                        </div>    	
                    </div>
            </form>	
        </div>
    );

}

export default Article;