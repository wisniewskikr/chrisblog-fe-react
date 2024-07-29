import ListMainArticles from "./list-main-articles/ListMainArticles";
import ListMainPagination from "./list-main-pagination/ListMainPagination";
import ListMainSorting from "./list-main-sorting/ListMainSorting";

const ListMain = () => (
    <>
        <ListMainSorting/>
        <ListMainArticles/>
        <ListMainPagination/>
    </>
);

export default ListMain;