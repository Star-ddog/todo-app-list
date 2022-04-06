import { useState,useEffect } from 'react';

const Usefetch = (url) => {

    const [results,setResults] = useState(null);
    const [ispending, setIspending] =useState(true);


       // deleting data from the browser command

       const handleDelete =(id) => {
        const newResults = results.filter(result => result.id !==id);
        setResults(newResults);
    }


     // to fetch data from our local server (Data/ db.json)

     useEffect(() =>{
        fetch(url)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setResults([...results,data]);
            setIspending(false);
        })
    }, [url]);

  return {results,ispending,handleDelete}
}

export default Usefetch;
