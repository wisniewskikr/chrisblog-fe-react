import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ListAsideSearch = () => { 

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchText");
    const tagId = searchParams.get("tagId");
    const navigate = useNavigate();
    const [newSearchText, setNewSearchText] = useState(searchText);

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

        if (newSearchText !== null) {
            content.push(<span className="icon icon-search" onClick={onClickSearch} role="presentation"></span>);
        } else {
            content.push(<span className="icon icon-cross" onClick={onClickClear} role="presentation"></span>);
        }

        return content;

      }

      function onClickSearch() {
        navigate(getUrl(newSearchText));
      }

      function onClickClear() {
        navigate(getUrl(null));
      }

      function handleSearchChange(event) {
        setNewSearchText(event.target.value);
      }

      function getUrl(newSearch) {

            const url = new URL(`http://localhost:8080/category/${categoryId}/sorting/${sorting}/page/${page}`);
            if (searchText != null) {
                url.searchParams.append("searchText", {newSearch});    
            }
            if (tagId != null) {
                url.searchParams.append("tagId", {tagId});    
            }

            return url.pathname;

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