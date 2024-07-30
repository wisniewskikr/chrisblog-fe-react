import ListMainArticlesArticle from "../list-main-articles article/ListMainArticlesArticle";

const ListMainArticles = (props) => {

    const content = getContent(props.articles);

    function getContent(articles) {

        let content = [];

        for (let article of articles) {
            content.push(<ListMainArticlesArticle article={article} />);
        }

        return content;

    }

    return (
        <span>
            {content}   					
        </span>
    );    

}

export default ListMainArticles;