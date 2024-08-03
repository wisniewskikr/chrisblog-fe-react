import { useEffect, useState } from "react";
import ListMainArticles from "./list-main-articles/ListMainArticles";
import ListMainPagination from "./list-main-pagination/ListMainPagination";
import ListMainSorting from "./list-main-sorting/ListMainSorting";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesURL } from "../../utils/Utils";

const ListMain = () => { 

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");

    const [articles, setArticles] = useState([]);
    const [pages, setPages] = useState([]);
    const [disablePrevious, setDisablePrevious] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    const content = getContent();

    useEffect(() =>{

        const fetchData = async () => {
    
          try {

            if (categoryId == null || page == null || sorting == null) {
                throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
            }

            const queryParams = {'categoryId': categoryId, 'page': page, 'sorting': sorting, 'searchText': searchText, 'tagId': tagId};
            const articleUrl = getArticlesURL(queryParams);
            const response = await fetch(articleUrl);

            if (!response.ok) {
                const text = JSON.stringify(response.text());
                throw new Error(`HTTP error! Status: ${response.status}. Message: ${text}.`);
            }

            const result = await response.json();
            setPages(result.pages);
            setDisablePrevious(result.disablePrevious);
            setDisableNext(result.disableNext);
            setArticles(result.articles);            

          } catch (error) {
            console.error('An error occurred:', error);
          }
    
        };
    
        fetchData();
    
      }, [categoryId, tagId, page, sorting, searchText]); 
    
    return (
        <div id="colorlib-main">
            <section className="ftco-section">    
                <div className="container">
                    <div className="row px-md-4">        
                        {content}
                    </div>
                </div>
            </section>
        </div>
    );

    function getContent() {

        let content = null;

        if (articles.length !== 0) {
            content =   <span className="full-width">
                            <ListMainSorting/>
                            <ListMainArticles articles={articles}/>
                            <ListMainPagination pages={pages} disablePrevious={disablePrevious} disableNext={disableNext}/>
                        </span>;
        } else {
            content =   <span>
                            There is no article yet.
                        </span>;
        }

        return content;

    }

}

export default ListMain;