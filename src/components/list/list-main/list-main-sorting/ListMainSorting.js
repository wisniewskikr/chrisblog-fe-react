import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ListMainSorting = () => {

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchText");
    const tagId = searchParams.get("tagId");
    const [selectedSorting, setSelectedSorting] = useState(sorting);
    const navigate = useNavigate();
    
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
            let selected = (selectedSorting === sort.value);
            opions.push(<option key={sort.value} value={sort.value} selected={selected}> {sort.text} </option>	);
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
        // Display only on big screens
        <span className="display-on-big-screen col-md-12">
            <div className="form-group row sorting-row ">
                <label htmlFor="sorting" className="col-md-2 col-form-label lb-lg sorting">Sorting:</label>
                <div className="col-md-4">
                    <select className="form-control sorting" onChange={handleOnChange}>
                        {options}			        
                    </select>
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

export default ListMainSorting;