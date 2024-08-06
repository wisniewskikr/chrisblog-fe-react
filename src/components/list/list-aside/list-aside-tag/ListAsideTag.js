import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ListAsideTag = ({searchText, tagId, newTagId, setNewTagId}) => {

    let { categoryId, page, sorting } = useParams();
    const navigate = useNavigate();
    const content = getContent();
    const tagsListContent = getTagsListContent();
    const tagsEmptyContent = getTagsEmptyContent();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const scriptMain = document.createElement('script');
        scriptMain.src = './../../../../../assets/js/main.js';
        scriptMain.async = true;    
        document.body.appendChild(scriptMain);
   
        return () => {
          document.body.removeChild(scriptMain);
        };
      }, []);

    function getContent() {

        let content = [];

        if (Number(categoryId) === 0) {
            return null;
        }

        content.push(<div className="sidebar-box ftco-animate tag-section">);
        content.push(<h3 className="sidebar-heading section-header">Tag Cloud</h3>);
        content.push(<ul className="tagcloud" >);
        content.push(<span>);

        if (tags.length != 0) {
            {tagsListContent}
        } else {
            {tagsEmptyContent}
        }

        content.push(</span>);
        content.push(</ul>);
        content.push(</div> );

        return content;

    }

    function getTagsListContent(){

        let content = [];

        for (let tag of tags) {
            content.push(<Link className="tag-cloud-link no-selected" > {tag.name} </Link>);
        }

        return content;

    }

    function getTagsEmptyContent() {

        let content = [];

        content.push("There is no tag yet.");

        return content;

    }
    
    return (
        {content}
    );

}

export default ListAsideTag;