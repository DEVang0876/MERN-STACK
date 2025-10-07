import React from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [mydata, setMyData] = React.useState([]);
  React.useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
      setMyData(res.data);
    })
    .catch(err=>alert(arr))
  })
  return (
    <div className="main">
      {
        mydata.map((value,index)=>{
          return (
            <div className='product'>
              <img src={value.image} alt={value.title} />
              <h2>{value.title}</h2>

              <p>Price: ${value.price}</p>
              <input className='btn' type="button" value="Buy Now" />
              
            </div>
          );
        })
      }
    </div>
  );
}
export default App;
