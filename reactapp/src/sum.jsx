import React from 'react';

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculateSum = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
      alert(`Sum: ${num1 + num2}`);
    } 
    else {
      alert('enter valid numbers');
    }
  };

  render() {
    return (
      <>
        <input type="text" id="num1" placeholder="Enter first number" />
        <input type="text" id="num2" placeholder="Enter second number" />
        <button onClick={this.calculateSum}>Calculate Sum</button>
      </>
    );
  }
}

export default Sum;
