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
        <div id="colorlib-page">
            <form>
                    
                <div id="colorlib-main" class="article">
                    <div class="container">	    			
                            <div class="col-lg-12 px-md-7 py-7">
                            
                                <span class=" d-none d-xl-block">
                                    <p class="blog-img">
                                        <a routerLink="">
                                        <img src="https://chrisblog.s3-eu-west-1.amazonaws.com/common/chris_blog.png" alt="" class="img-fluid"/>
                                        </a>
                                    </p>
                                </span>	

                                <div class="nav d-flex align-items-center full-height">
                                    {/* TODO */}
                                    <a routerLink="">
                                        <span class="nav-item">Home</span>
                                    </a>
                                    {/* TODO */}
                                    <a routerLink="/about">
                                        <span class="nav-item">About Me</span>
                                    </a>
                                </div>

                                <div class="row articleSection pt-md-4 articleBanner d-flex align-items-center justify-content-center full-height"	    					
                                    style="background-image: url(https://chrisblog.s3-eu-west-1.amazonaws.com/banner/Books/banner.jpg);"
                                    >
                                    <div class="col-lg-12 px-md-7 py-7" >
                                        <div class="row articleSection d-flex align-items-center justify-content-center full-height ">
                                            {/* TODO */}
                                            <div class="mb-3 articleBannerText" > {{article?.title}} </div>
                                        </div>
                                        <div class="row articleSection meta-wrap">
                                            <p>
                                                {/* TODO */}
                                                <span class="icon-wrap"><i class="icon-calendar mr-2"></i> {{article?.date}} </span>
                                                {/* TODO */}
                                                <span class="icon-wrap"><i class="icon-person mr-2"></i> {{article?.title}} </span>                                                
                                            </p>
                                        </div>
                                    </div>
                                </div> 

                                <span class="d-none d-xl-block">
                                    <div class="avatarIcon">
                                        <div class="avatar">
                                            <img th:src="@{https://chrisblog.s3-eu-west-1.amazonaws.com/common/none.png}" alt=""/>
                                        </div>
                                        {/* TODO */}
                                        <span class="author_name">By: <b> {{article?.author}} </b> </span>
                                    </div>
                                </span>	

                                <hr class="line d-none d-xl-block"/>						
                                    
                                <h2 class="mb-3 mt-5 articleSectionTitle">Introduction</h2>
                                <div class="row articleSection pt-md-4" [innerHtml]="article?.description"></div>
                                
                                <p class="article-img">
                                    <img src="https://chrisblog.s3-eu-west-1.amazonaws.com/articles/article-{{article?.id}}/main.jpg" alt="" class="img-fluid"/>
                                </p>

                                {/* TODO */}
                                <span if="article?.template == 'CONTENT'">
                                    <h2 class="mb-3 mt-5 articleSectionTitle">Description</h2>	
                                    {/* TODO */}
                                    <div class="row articleSection pt-md-4" innerHtml="article?.content"></div>	
                                </span>

                                {/* TODO */}
                                <span if="article?.template == 'LINK_ALBUM'">
                                    <h2 class="mb-3 mt-5 articleSectionTitle">Google Album</h2>				            
                                    <div class="row articleSection pt-md-4">
                                        Pictures from this area you can find in my
                                        {/* TODO  */}
                                        <a href="{{article?.url}}" target="blank">Google Album</a>.
                                    </div>
                                </span>	

                                {/* TODO */}
                                <span if="article?.template == 'LINK_DOCUMENT'">
                                    <h2 class="mb-3 mt-5 articleSectionTitle">Google Document</h2>				            
                                    <div class="row articleSection pt-md-4">
                                        More details about this topic you can find in my 
                                        {/* TODO */}
                                        <a href="{{article?.url}}" target="blank">Google Document</a>.
                                    </div> 
                                </span> 

                                {/* TODO */}
                                <span if="article?.template == 'LINK_GITHUB'">
                                    <h2 class="mb-3 mt-5 articleSectionTitle">Github Repository</h2>				            
                                    <div class="row articleSection pt-md-4">
                                        Source Code with explanation you can find in my 
                                        {/* TODO */}
                                        <a href="{{article?.url}}" target="blank">Github Repository</a>.
                                    </div>
                                </span>

                                {/* TODO */}
                                <span if="article?.template == 'LINK_YOUTUBE'">
                                    <h2 class="mb-3 mt-5 articleSectionTitle">YouTube Channel</h2>				            
                                    <div class="row articleSection pt-md-4">
                                        More details about this topic you can find on my
                                        {/* TODO */}
                                        <a href="{{article?.url}}" target="blank">YouTube Channel</a>.
                                    </div>
                                </span> 

                                <div class="form-group article-button">
                                    {/* TODO */}
                                    <a routerLink="" click="onClick()" class="btn py-3 px-4 btn-primary">Go Back</a>
                                </div>       
                            
                            </div>
                        </div>    	
                    </div>
            </form>	
        </div>
    );

}

export default Article;