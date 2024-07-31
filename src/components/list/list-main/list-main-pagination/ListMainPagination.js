import { Link, useParams, useSearchParams } from "react-router-dom";

const ListMainPagination = (props) => {

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchText");
    const tagId = searchParams.get("tagId");
    const previousButton = getPreviousButton();
    const pagesButtons = getPagesButtons();
    const nextButton = getNextButton();

    function getPreviousButton() {

        let content = [];

        if (props.disablePrevious) {
            content.push(<li className="disabled" key="previous"><span>&lt;</span></li>);
        } else {
            content.push(<li key="previous"><Link onClick={onClickPrevious} className="pointer">&lt;</Link></li>);
        }       

        return content;

    }

    function getPagesButtons() {

        let content = [];
        
        for (let pageItem of props.pages) {

            if (pageItem === page) {
                content.push(<li className="active" key={pageItem}><span> {pageItem} </span></li>);
            } else {
                content.push(<li key={pageItem}><Link onClick={onClick(pageItem)} className="pointer"> {pageItem} </Link></li>);
            }

        }

        return content;

    }

    function getNextButton() {

        let content = [];

        if (props.disableNext) {
            content.push(<li className="disabled" key="next"><span>&gt;</span></li>);
        } else {
            content.push(<li key="next"><Link onClick={onClickNext} className="pointer">&gt;</Link></li>);
        }       

        return content;

    }

    function onClickPrevious() {
        // TODO
    }

    function onClick(pageItem) {
        // TODO
    }

    function onClickNext() {
        // TODO
    }

    return (
        <div className="row">
            <div className="col text-center text-md-left">
            <div className="block-27">
                <ul>
                    {previousButton}
                    <span>
                        {pagesButtons}
                    </span>
                    {nextButton}
                </ul>
            </div>		            
            </div>
        </div>
    );

}

export default ListMainPagination;