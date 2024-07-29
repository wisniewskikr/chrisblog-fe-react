import ListMainArticles from "./list-main-articles/ListMainArticles";
import ListMainPagination from "./list-main-pagination/ListMainPagination";
import ListMainSorting from "./list-main-sorting/ListMainSorting";

const ListMain = () => { 

    let articles = [];
    let categoryId = null;
    let tagId  = null;
    let page = null;
    let sorting = null;
    let searchText = null;
    let pages = [];
    let disablePrevious = false; 
    let disableNext = false;
    
    return (
        <>
            <ListMainSorting/>
            <ListMainArticles/>
            <ListMainPagination/>
        </>
    );

}

export default ListMain;