import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { createUrl } from "../../../utils/Utils";

const ListMainSorting = () => {

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");
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
            opions.push(<option key={sort.value} value={sort.value}> {sort.text} </option>	);
        }

        return opions;

    }

    function getUrl(newSorting) {

        const pathParams = {'categoryId': categoryId, 'sorting': newSorting, 'page': page};
        const queryParams = {'searchtext': searchText, 'tagid': tagId};
        return createUrl(pathParams, queryParams);

    }

    return (
        // Display only on big screens
        <span className="display-on-big-screen col-md-12">
            <div className="form-group row sorting-row ">
                <label htmlFor="sorting" className="col-md-2 col-form-label lb-lg sorting">Sorting:</label>
                <div className="col-md-4">
                    <select className="form-control sorting" onChange={handleOnChange} defaultValue={selectedSorting}>
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