import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';

// class Laptop extends React.Component{
//   constructor(){
//     super();
//     this.brand = "Hp";
//     this.color = "White";
//     this.price = 50000;
//     this.size = 15;
//     this.os = "windows11"; 
//   }
//   getBrand =()=> {
//     console.log(this.brand);
//   }
//   getColor =()=> {
//     console.log(this.color);
//   }
//   getPrice =()=> {
//     console.log(this.price);
//   }
//   getSize =()=> {
//     console.log(this.size);
//   }
//   getOs =()=> {
//     console.log(this.os);
//   }
//   render(){
//     return(
//     <div>
//       <button onClick={this.getBrand}>Brand Name</button>
//       <button onClick={this.getColor}>Color</button>
//       <button onClick={this.getPrice}>Show Price</button>
//       <button onClick={this.getSize}>Size</button>
//       <button onClick={this.getOs}>Operating System</button>
//     </div>
//     )
//   }
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
 // <Laptop />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
