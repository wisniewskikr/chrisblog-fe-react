import ListAsideCategories from "./list-aside-categories/ListAsideCategories";
import ListAsideSorting from "./list-aside-sorting/ListAsideSorting";
import ListAsideSearch from "./list-aside-search/ListAsideSearch";
import ListAsideTag from "./list-aside-tag/ListAsideTag";
import ListAsideFooter from "./list-aside-footer/ListAsideFooter";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const ListAside = () => {

    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");
    const [newSearchText, setNewSearchText] = useState((searchText == null) ? "" : searchText);
    const [newTagId, setNewTagId] = useState((tagId == null) ? "" : tagId);
    
    return(
        
        <aside id="colorlib-aside" className="js-fullheight">
            
            <ListAsideCategories setNewSearchText={setNewSearchText}/> 

            <ListAsideSorting/> 

            <ListAsideSearch searchText={searchText} newSearchText={newSearchText} setNewSearchText={setNewSearchText} tagId={tagId}/> 

            <ListAsideTag searchText={searchText} tagId={tagId} newTagId={newTagId} setNewTagId={setNewTagId}/> 

            <ListAsideFooter/> 

        </aside>

    );

}

export default ListAside;