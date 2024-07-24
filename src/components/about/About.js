import './About.css';

const About = () => {
    
    return(
        <div id="colorlib-page">
            <form id="aboutForm" method="post">
                
                <div id="colorlib-main">
                    <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                        <div class="container-fluid px-0">
                            <div class="row d-flex">

                                <div class="col-md-6 d-flex">
                                    <div class="img d-flex align-self-stretch align-items-center js-fullheight" className="background-image">
                                    </div>
                                </div>

                                <div class="col-md-6 d-flex align-items-center">
                                    <div class="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 ftco-animate">
                                        <h2 class="mb-4">I'm <span>Krzysztof Wisniewski</span> a Polish IT Guy.</h2>
                                        <p>I am interested in books, movies, travels and Latino dances - salsa, bachata, kizomba. 
                                        Professionally I'm IT guy who tries to improve his programming skills and share his knowledge with others.
                                        If you want to contact me please use my email <a href="mailto:wisniewskikr@gmail.com">wisniewskikr&#64;gmail.com</a> 
                                        , <a href="https://www.facebook.com/krzysztof.wisniewski.1979" target="_blank">Facebook page</a>
                                        or <a href="https://www.instagram.com/krzysztof.wisniewski.1979/" target="_blank">Instagram page</a>.</p>
                                        <a href="#" class="btn py-3 px-4 btn-primary">Go Back</a>
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

export default About;