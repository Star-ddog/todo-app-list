import Result from './Result';
import Usefetch from "./Usefetch";
const Home = () => {



    const {results,ispending,handleDelete} = Usefetch('http://localhost:800/results');

    return (  
        <div className="home">
            {/* the first result&& is to make sure the fetch data worked */}
            {ispending && <div>loading</div> }
        {results &&<Result results={results} handleDelete={handleDelete} />} 
        </div>
    );
}
 
export default Home;