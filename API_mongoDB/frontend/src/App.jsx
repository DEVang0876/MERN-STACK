import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [mydata, setMyData] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    axios
      .get('http://127.0.0.1:5001/product-api')
      .then((res) => {
        setMyData(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load products');
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Products</h2>
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      )}
      <div className="product-list">
        {mydata.map((item, index) => (
          <div className="product" key={item._id || index}>
            <h3>{item.pname}</h3>
            <p>Price: ${item.pprice}</p>
            <p style={{ minHeight: 40 }}>{item.pdetails}</p>
            <input className="btn" type="button" value="Buy Now" />
          </div>
        ))}
        {mydata.length === 0 && !error && (
          <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
        )}
      </div>
    </div>
  );
}
export default App;
