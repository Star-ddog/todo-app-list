import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Content = () => {

  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');
  const [alert,setAlert] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) =>{
    e.preventDefault();
    const reminder = {title,details};

    fetch('http://localhost:800/results',{
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(reminder)

    })
    .then(() =>{
      console.log('hurry you added a new reminder');
      setAlert(true);
    navigate("/");
    })
  }

 
  // useEffect(() => {
  //   if(results.length && !alert) {
  //     return;
  //   }
  // }, [alert, results])
   

  return <div className="reminder">
    
    <div className='curve-box'>
    <h4>My reminder</h4>
           <form onSubmit={handleSubmit}>  
            <label>Title:</label>
            <input type="text"  
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='title-area'/> 
            <br />
            <label htmlFor="">Details:</label>
            <textarea name="Details" className='text-area'
            value={details}
            onChange={(e) => setDetails(e.target.value)}>

            </textarea>
           {<button type="submit" >Submit</button>}
           </form>
           {alert && <h2>submit successful</h2>}
    </div>
     

  </div>;
  
  
};

export default Content;