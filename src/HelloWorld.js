import { useParams } from "react-router-dom";

const HelloWorld = () => {

    let { name } = useParams(); 
    return (<h2>HelloWorld {name}!</h2>);
    
};

export default HelloWorld;