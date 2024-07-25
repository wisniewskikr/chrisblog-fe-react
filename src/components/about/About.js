import './About.css';

const About = () => {
    
    return(
        <div id="colorlib-page">
            <form id="aboutForm" method="post">
                
                <div id="colorlib-main">
                    <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                        <div className="container-fluid px-0">
                            <div className="row d-flex">

                                <div className="col-md-6 d-flex">
                                    <div className="img d-flex align-self-stretch align-items-center js-fullheight" style={inlineStyles.backgroundImage}>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex align-items-center">
                                    {/* TODO */}
                                    {/* <div class="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 ftco-animate"> */}
                                    <div className="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5">
                                        <h2 className="mb-4">I'm <span>Krzysztof Wisniewski</span> a Polish IT Guy.</h2>
                                        <p>I am interested in books, movies, travels and Latino dances - salsa, bachata, kizomba. 
                                        Professionally I'm IT guy who tries to improve his programming skills and share his knowledge with others.
                                        If you want to contact me please use my email <a href="mailto:wisniewskikr@gmail.com">wisniewskikr&#64;gmail.com</a> 
                                        , <a href="https://www.facebook.com/krzysztof.wisniewski.1979" target="_blank" rel="noreferrer">Facebook page</a>
                                        or <a href="https://www.instagram.com/krzysztof.wisniewski.1979/" target="_blank" rel="noreferrer">Instagram page</a>.</p>
                                        <a href="#" className="btn py-3 px-4 btn-primary">Go Back</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </div>
            
            </form>	
        </div>
    );
}

const inlineStyles = {
    backgroundImage: {
        backgroundImage: "url(https://chrisblog.s3-eu-west-1.amazonaws.com/about/about.jpg)",
    },
};

export default About;