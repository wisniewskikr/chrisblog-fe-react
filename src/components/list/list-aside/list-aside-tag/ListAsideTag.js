import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTagsApiUrl } from "../../../utils/Utils";

const ListAsideTag = ({searchText, tagId, newTagId, setNewTagId}) => {

    let { categoryId, page, sorting } = useParams();
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const tagListContent = getTagListContent();
    

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
                content.push(<Link key={tag.id} className="tag-cloud-link no-selected" > {tag.name} </Link>);
            }
        } else {
            content.push("There is no tag yet.");
        }

        

        return content;

    }
    
    return (
        <div className="sidebar-box ftco-animate tag-section">
            <h3 className="sidebar-heading section-header">Tag Cloud</h3>
            <ul className="tagcloud" >
                <span>
                    {tagListContent}
                </span>
            </ul>
        </div>
    );

}

export default ListAsideTag;