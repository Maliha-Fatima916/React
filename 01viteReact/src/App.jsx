import Firstvite from "./Firstvite";

// inside this App() (React component) , JSX code is written

//1. SIMPLE App()
// function App(){
//     return (
//       <>
//       <h1> Hi!!! from Vite REACT </h1>
//       </>
//     )
// }
// export default App;

//......................................................................................

//2. App() with imported JSX code's file named Firstvite.jsx

// function App() {
//   return (
//     <>
//    <h1> Moved to local host</h1>
//    <Firstvite/>
//    </>
//   );
// }

// export default App;

//........................................................................................

//3. App() with a variable insside it

// Using variables in JSX; inside JSX tags use variable inside {}

const username = 'Sam'

function App(){
  return(
  <>
  <h3> Hi there!!  {username} </h3>
  </>
  )
}
export default App;

// NOTE : {variable} in JSX is called evaluated expression in {} we can only give final result of any JS code 
// like in {} , we can't write loop/ if-blocks , that should be written outside App() and to include them in JSX code
// we use the final result (return by them) inside {}

