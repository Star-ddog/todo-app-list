import React from 'react';


const Result = ({results,handleDelete}) => {
 

  return <div>
    
      {results.map((result) =>(
                <div className="result-preview" key={result.id}>
                   <h2>{result.title}</h2>
                    <p>{result.details}</p>
                    <button onClick={() => handleDelete(result.id)}>delete</button>
                 
                </div>
            ))}
  </div>;
};

export default Result;
