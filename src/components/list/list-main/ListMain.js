import { useEffect, useState } from "react";
import ListMainArticles from "./list-main-articles/ListMainArticles";
import ListMainPagination from "./list-main-pagination/ListMainPagination";
import ListMainSorting from "./list-main-sorting/ListMainSorting";

const ListMain = () => { 

    const [articles, setArticles] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [tagId, setTagId] = useState(null);
    const [page, setPage] = useState(null);
    const [sorting, setSorting] = useState(null);
    const [searchText, setSearchText] = useState(null);
    const [pages, setPages] = useState([]);
    const [disablePrevious, setDisablePrevious] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    useEffect(() =>{

        const fetchData = async () => {
    
          try {

            const response = await fetch(`http://localhost:8080/api/v1/article?categoryId=1&page=1&sorting=TITLE_INCREASING`);

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
    
      }, []); 
    
    return (
        <>
            {/* TODO */}
            Disable Previous: {JSON.stringify(disablePrevious)}
            Disable Next: {JSON.stringify(disableNext)}
            Pages: {pages}
            <ListMainSorting/>
            <ListMainArticles/>
            <ListMainPagination/>
        </>
    );

}

export default ListMain;