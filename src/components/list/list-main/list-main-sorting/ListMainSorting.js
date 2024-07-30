const ListMainSorting = () => {

    const sortings = [
        new Sorting("title: increasing", "title_increasing"),
        new Sorting("title: decreasing", "title_decreasing"),
        new Sorting("date: increasing", "date_increasing"),
        new Sorting("date: decreasing", "date_decreasing"),
        new Sorting("author: increasing", "author_increasing"),
        new Sorting("author: decreasing", "author_decreasing")
    ];
    const selectedSorting = null;
    const options = getOptions();

    function getOptions() {

        let opions = [];

        for (let sort of sortings) {
            let selected = (selectedSorting === sort.value);
            opions.push(<option value="{sort.value}" selected={selected}> {sort.text} </option>	);
        }

        return opions;

    }

    return (
        // Display only on big screens
        <span className="display-on-big-screen col-md-12">
            <div className="form-group row sorting-row ">
                <label htmlFor="sorting" className="col-md-2 col-form-label lb-lg sorting">Sorting:</label>
                <div className="col-md-4">
                    {/* TODO - onChange */}
                    <select className="form-control sorting">
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