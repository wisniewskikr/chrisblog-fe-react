import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryApiUrl, getCategoryPathAndQuery } from "../../../utils/Utils";

const ListAsideCategories = ({setNewSearchText, setNewTagId}) => {

    let { categoryId, page, sorting } = useParams();

    const [categories, setCategories] = useState([]);
    const contentHome = getContentHome();
    const contentCategories = getContentCategories();
    const contentAbout = getContentAbout();

    useEffect(() =>{

        const fetchData = async () => {
    
          try {

            const url = getCategoryApiUrl();
            const response = await fetch(url);

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
        content.push(<li key="home" className={selected ? 'colorlib-active' : ''}> <Link to={getUrl(0)} onClick={handleOnClick}>Home</Link> </li>);

        return content;

    }

    function getContentCategories() {

        let content = [];        

        for (let category of categories) {
            const selected = (Number(categoryId) === Number(category.id));
            content.push(<li key={category.id} className={selected ? 'colorlib-active' : ''}> <Link to={getUrl(category.id)} onClick={handleOnClick}> {category.name} </Link> </li>);
        }

        return content;

    }

    function getContentAbout() {

        let content = [];

        content.push(<li key="about"> <Link to="/about">About Me</Link> </li>);

        return content;

    }

    function getUrl(newCategoryId) {

        const pathParams = {'categoryId': newCategoryId, 'sorting': sorting, 'page': page};
        const queryParams = {'searchtext': null, 'tagid': null};
        return getCategoryPathAndQuery(pathParams, queryParams);

    }

    function handleOnClick() {
        setNewSearchText("");
        setNewTagId("");
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