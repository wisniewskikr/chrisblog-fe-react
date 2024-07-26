import { Link, useParams } from 'react-router-dom';

const Article = () => {

    let { id } = useParams(); 

    return(
        <>Id: {id}</>
    );

}

export default Article;