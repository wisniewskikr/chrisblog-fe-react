import { Link, useParams, useSearchParams } from "react-router-dom";
import { createUrl } from "../../../utils/Utils";

const ListMainPagination = (props) => {

    let { categoryId, page, sorting } = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("searchtext");
    const tagId = searchParams.get("tagid");
    const previousButton = getPreviousButton();
    const pagesButtons = getPagesButtons();
    const nextButton = getNextButton();
  
    function getPreviousButton() {

        let content = [];

        if (props.disablePrevious) {
            content.push(<li className="disabled" key="previous"><span>&lt;</span></li>);
        } else {
            content.push(<li key="previous"><Link to={getUrl(Number(page) - 1)} className="pointer">&lt;</Link></li>);
        }       

        return content;

    }

    function getPagesButtons() {

        let content = [];
        
        for (let pageItem of props.pages) {

            if (Number(pageItem) === Number(page)) {
                content.push(<li className="active" key={pageItem}><span> {pageItem} </span></li>);
            } else {
                content.push(<li key={pageItem}><Link to={getUrl(pageItem)} className="pointer"> {pageItem} </Link></li>);
            }

        }

        return content;

    }

    function getNextButton() {

        let content = [];

        if (props.disableNext) {
            content.push(<li className="disabled" key="next"><span>&gt;</span></li>);
        } else {
            content.push(<li key="next"><Link to={getUrl(Number(page) + 1)} className="pointer">&gt;</Link></li>);
        }       

        return content;

    }

    function getUrl(newPage) {

        const pathParams = {'categoryId': categoryId, 'sorting': sorting, 'page': newPage};
        const queryParams = {'searchtext': searchText, 'tagid': tagId};
        return createUrl(pathParams, queryParams);

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