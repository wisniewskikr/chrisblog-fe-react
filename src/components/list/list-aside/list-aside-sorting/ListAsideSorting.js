import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ListAsideSorting = () => {
    
    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");
    const [selectedSorting, setSelectedSorting] = useState(sorting);
    const navigate = useNavigate();

    useEffect(() => {
        const scriptMain = document.createElement('script');
        scriptMain.src = './../../../../../assets/js/main.js';
        scriptMain.async = true;    
        document.body.appendChild(scriptMain);

        const scriptCustom = document.createElement('script');
        scriptCustom.src = './../../../../../assets/js/custom.js';
        scriptCustom.async = true;    
        document.body.appendChild(scriptCustom);
    
        return () => {
          document.body.removeChild(scriptMain);
          document.body.removeChild(scriptCustom);
        };
      }, []);
    
    const sortings = [
        new Sorting("title: increasing", "title_increasing"),
        new Sorting("title: decreasing", "title_decreasing"),
        new Sorting("date: increasing", "date_increasing"),
        new Sorting("date: decreasing", "date_decreasing"),
        new Sorting("author: increasing", "author_increasing"),
        new Sorting("author: decreasing", "author_decreasing")
    ];    
    const options = getOptions();

    const handleOnChange = (event) => {
        const newSorting = event.target.value;
        setSelectedSorting(newSorting);
        navigate(getUrl(newSorting));        
    };
    
    function getOptions() {

        let opions = [];

        for (let sort of sortings) {
            opions.push(<option key={sort.value} value={sort.value}> {sort.text} </option>	);
        }

        return opions;

    }

    function getUrl(newSorting) {

        const url = new URL(`http://localhost:8080/category/${categoryId}/sorting/${newSorting}/page/${page}`);
        if (searchText != null) {
            url.searchParams.append("searchText", {searchText});    
        }
        if (tagId != null) {
            url.searchParams.append("tagId", {tagId});    
        }

        return url.pathname;

    }

    return (
        // Display only on small screens
        <span className="display-on-small-screen">
            <div className="sidebar-box ftco-animate search-section">
                <h3 className="sidebar-heading section-header">Sorting</h3>
                <div className="search-form">
                    <div className="form-group">
                        <select className="form-control sorting-no-xl-screen" onChange={handleOnChange} defaultValue={selectedSorting}>
                            {options}			        
                        </select>
                    </div>
                </div> 
            </div>
        </span>
    );

}

class Sorting {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

export default ListAsideSorting;