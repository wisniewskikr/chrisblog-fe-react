import ListAsideCategories from "./list-aside-categories/ListAsideCategories";
import ListAsideSorting from "./list-aside-sorting/ListAsideSorting";
import ListAsideSearch from "./list-aside-search/ListAsideSearch";
import ListAsideTag from "./list-aside-tag/ListAsideTag";
import ListAsideFooter from "./list-aside-footer/ListAsideFooter";

const ListAside = () => {
    
    return(
        
        <aside id="colorlib-aside" className="js-fullheight">
            
            <ListAsideCategories/> 

            <ListAsideSorting/> 

            <ListAsideSearch/> 

            <ListAsideTag/> 

            <ListAsideFooter/> 

        </aside>

    );

}

export default ListAside;