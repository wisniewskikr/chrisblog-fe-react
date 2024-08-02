import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ListAsideCategories = () => {

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");

    const [categories, setCategories] = useState([]);
    const contentHome = getContentHome();
    const contentCategories = getContentCategories();
    const contentAbout = getContentAbout();

    useEffect(() =>{

        const fetchData = async () => {
    
          try {

            const response = await fetch("http://localhost:8080/api/v1/category");

            if (!response.ok) {
                const text = JSON.stringify(response.text());
                throw new Error(`HTTP error! Status: ${response.status}. Message: ${text}.`);
            }

            const result = await response.json();
            setCategories(result.categories);
            
          } catch (error) {
            console.error('An error occurred:', error);
          }
    
        };
    
        fetchData();
    
    }, []); 

    function getContentHome() {

        let content = [];

        const selected = (Number(categoryId) === 0);
        content.push(<li key="home" className={selected ? 'colorlib-active' : ''}> <Link to="/">Home</Link> </li>);

        return content;

    }

    function getContentCategories() {

        let content = [];        

        for (let category of categories) {
            const selected = (Number(categoryId) === Number(category.id));
            content.push(<li key={category.id} className={selected ? 'colorlib-active' : ''}> <Link to={getUrl(category.id)}> {category.name} </Link> </li>);
        }

        return content;

    }

    function getContentAbout() {

        let content = [];

        content.push(<li key="about"> <Link to="/about">About Me</Link> </li>);

        return content;

    }

    function getUrl(newCategoryId) {

        const url = new URL(`http://localhost:3000/category/${newCategoryId}/sorting/${sorting}/page/${page}`);
        if (searchText != null) {
            url.searchParams.append("searchText", {searchText});    
        }
        if (tagId != null) {
            url.searchParams.append("tagId", {tagId});    
        }

        return url.pathname;

    }
    
    return (
        <nav id="colorlib-main-menu" role="navigation">			
            <ul>                
                {contentHome}                
                <span>
                    {contentCategories}
                </span>  
                {contentAbout}                 		
            </ul>
        </nav>
    );

}

export default ListAsideCategories;