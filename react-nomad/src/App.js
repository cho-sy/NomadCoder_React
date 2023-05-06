// import Button from "./Button";
// import styles from "./App.module.css";
import { memo, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// ### Movie App ###
function App(){
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element ={<Detail />}></Route> 
    </Routes>
      
  </Router>);
}



// Practice 1 
// function App() {
//   const [counter, setValue] =useState(0);
//   const onClick = ()=>setValue((prev)=>prev+1);
  
//   const [keyword, setKeyword] = useState("");
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(()=>{
//     console.log("맨 처음 한번만 호출")},[]);
//   useEffect(()=>{
//     console.log("keyword가 변할때만 호출")},[keyword]);
//   useEffect(()=>{
//     console.log("counter가 변할때만 호출")},[counter]);
  
//   return (
//     <div>
//       <input 
//         onChange={onChange} 
//         type="text" 
//         placeholder="Search here..." 
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }


//Practice 2
// function App(){
//   const [toDo, setToDo] = useState(""); // 할일(개별)을 담는 변수 
//   const [toDos, setToDos] = useState([]); // toDo들을 저장해줄 배열 변수, setToDos로 접근하여 배열에 할당해준다 
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault(); // 이벤트 전파를 방지함 
//     if(toDo ===""){
//       return; // todo가 비어있다면 함수를 작동시키지 않는다 
//     }
//     setToDo(""); // input도 비워준다 (값이 submit 되었을 때)
//     setToDos(currentArray => [toDo, ...currentArray]); // state는 항상 새거여야 함
//     console.log(toDos);
//   }
//   return(
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input 
//           onChange={onChange} 
//           value={toDo} 
//           type="text" 
//           placeholder="Write Your To DO" 
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((value, index) => 
//         <li key={index}>{value}</li>
//         )}
//       </ul>
      
//     </div>
//   );
// }


//Practice 3
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(()=>{
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then(response=> response.json())
//     .then(json=> {
//       setCoins(json); // 코인을 받아 배열에 넣어준다
//       setLoading(false); // 코인을 전부 받았다면 loading을 false로 
//       });
//   }, []) // 2번째 argu가 빈배열이면 한번만 동작 
//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading? 
//         <strong>Loading...</strong>
//       :
//         <select>
//           {coins.map((coin)=>
//           <option>
//             {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//             </option>
//           )}
//         </select>
//       }
      
//     </div>
//   );
// }


export default App;
