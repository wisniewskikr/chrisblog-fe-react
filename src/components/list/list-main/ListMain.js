import { useEffect, useState } from "react";
import ListMainArticles from "./list-main-articles/ListMainArticles";
import ListMainPagination from "./list-main-pagination/ListMainPagination";
import ListMainSorting from "./list-main-sorting/ListMainSorting";
import { useParams, useSearchParams } from "react-router-dom";

const ListMain = () => { 

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchText");
    const tagId = searchParams.get("tagId");

    const [articles, setArticles] = useState([]);
    const [pages, setPages] = useState([]);
    const [disablePrevious, setDisablePrevious] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    useEffect(() =>{

        const fetchData = async () => {
    
          try {

            if (categoryId == null || page == null || sorting == null) {
                throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
              }

            const articlesUrl = new URL("http://localhost:8080/api/v1/article");
            articlesUrl.searchParams.append("categoryId", categoryId);
            articlesUrl.searchParams.append("page", page);
            articlesUrl.searchParams.append("sorting", sorting);
            if (searchText != null) {
                articlesUrl.searchParams.append("searchText", {searchText});    
            }
            if (tagId != null) {
                articlesUrl.searchParams.append("tagId", {tagId});    
            }

            const response = await fetch(articlesUrl);

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