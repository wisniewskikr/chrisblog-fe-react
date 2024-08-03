import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getCategoryPathAndQuery } from "../../../utils/Utils";

const ListAsideSearch = () => { 

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");
    const navigate = useNavigate();
    const [newSearchText, setNewSearchText] = useState((searchText == null) ? "" : searchText);

    const contentIcon = getContentIcon();

    useEffect(() => {
        const scriptMain = document.createElement('script');
        scriptMain.src = './../../../../../assets/js/main.js';
        scriptMain.async = true;    
        document.body.appendChild(scriptMain);
   
        return () => {
          document.body.removeChild(scriptMain);
        };
      }, []);

      function getContentIcon() {

        let content = [];

        if (searchText !== null) {
          content.push(<span key="clear" className="icon icon-cross" onClick={onClickClear} role="presentation"></span>);            
        } else {
          content.push(<span key="search" className="icon icon-search" onClick={onClickSearch} role="presentation"></span>);
        }

        return content;

      }

      function onClickSearch() {        
        const pathParams = {'categoryId': categoryId, 'sorting': sorting, 'page': page};
        const queryParams = {'searchtext': newSearchText, 'tagid': tagId};
        const url = getCategoryPathAndQuery(pathParams, queryParams);
        navigate(url);
      }

      function onClickClear() {
        setNewSearchText("");
        const pathParams = {'categoryId': categoryId, 'sorting': sorting, 'page': page};
        const queryParams = {'searchtext': null, 'tagid': tagId};
        const url = getCategoryPathAndQuery(pathParams, queryParams);
        navigate(url);
      }

      function handleSearchChange(event) {
        setNewSearchText(event.target.value);
      }
    
    return (
        <div className="sidebar-box ftco-animate search-section">
            <h3 className="sidebar-heading section-header">Search</h3>
            <div className="search-form">
                <div className="form-group">
                    {contentIcon}                    
                    <input type="text" className="form-control" placeholder="Type a keyword" value={newSearchText} onChange={handleSearchChange} /> 
                </div>
            </div> 
        </div>
    );

}

export default ListAsideSearch;