import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryPathAndQuery, getTagsApiUrl } from "../../../utils/Utils";

const ListAsideTag = ({searchText, tagId, newTagId, setNewTagId}) => {

    let { categoryId, page, sorting } = useParams();
    const [tags, setTags] = useState([]);
    const tagListContent = getTagListContent();
    const isHomeCategory = estimateHomeCategory(); 

    useEffect(() =>{

        const fetchData = async () => {
    
          try {

            if (categoryId == null || page == null || sorting == null) {
                throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
            }

            const queryParams = {'categoryId': categoryId, 'page': page, 'sorting': sorting, 'searchText': searchText, 'tagId': tagId};
            const tagsUrl = getTagsApiUrl(queryParams);
            const response = await fetch(tagsUrl);

            if (!response.ok) {
                const text = JSON.stringify(response.text());
                throw new Error(`HTTP error! Status: ${response.status}. Message: ${text}.`);
            }

            const result = await response.json();
            setTags(result.tags);                        

          } catch (error) {
            console.error('An error occurred:', error);
          }
    
        };
    
        fetchData();
    
      }, [categoryId, tagId, page, sorting, searchText]);
    
    useEffect(() => {
        const scriptMain = document.createElement('script');
        scriptMain.src = './../../../../../assets/js/main.js';
        scriptMain.async = true;    
        document.body.appendChild(scriptMain);
   
        return () => {
          document.body.removeChild(scriptMain);
        };
      }, []);


    function getTagListContent(){

        let content = [];

        if (tags.length !== 0) {
            for (let tag of tags) {
                const selected = (Number(newTagId) === Number(tag.id));
                const url = (selected) ? getUrlSelected() : getUrlNotSelected(tag.id);
                content.push(<Link key={tag.id} to={url} className={selected ? 'tag-cloud-link selected' : 'tag-cloud-link no-selected'} onClick={() => handleOnClick(tag.id)} > {tag.name} </Link>);
            }
        } else {
            content.push("There is no tag yet.");
        }       

        return content;

    }

    function estimateHomeCategory() {
        return Number(categoryId) === 0;
    }

    function handleOnClick(selectedTagId) {    
        setNewTagId(Number(newTagId) !== Number(selectedTagId) ? selectedTagId : ""); 
    }

    function getUrlSelected() {

        const pathParams = {'categoryId': categoryId, 'sorting': sorting, 'page': page};
        const queryParams = {'searchtext': searchText, 'tagid': null};
        return getCategoryPathAndQuery(pathParams, queryParams);

    }

    function getUrlNotSelected(selectedTagId) {

        const pathParams = {'categoryId': categoryId, 'sorting': sorting, 'page': page};
        const queryParams = {'searchtext': searchText, 'tagid': selectedTagId};
        return getCategoryPathAndQuery(pathParams, queryParams);

    }
    
    return (
        <>
            {!isHomeCategory && 
                <div className="sidebar-box ftco-animate tag-section">
                    <h3 className="sidebar-heading section-header">Tag Cloud</h3>
                    <ul className="tagcloud" >
                        <span>
                            {tagListContent}
                        </span>
                    </ul>
                </div>
            }
        </>
    );

}

export default ListAsideTag;