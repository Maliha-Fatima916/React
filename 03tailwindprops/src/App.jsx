import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Just as functions take arguments, React components take props.
// These props allow components to be reusable and dynamic.

//How Props Work
//Parent component passes data to child component as attributes.
//Child component receives these values as an object called props.
//You can use props.propertyName inside the child component to display or use the data.

// let App() => Parent Component
// Child() => Child react component
// Child(props) =>  props is default and available for each component
// <Child /> : JSX way to put child component inside a parent component
// <Child helloText = 'hello' /> : Parent component passes data to child component as attributes.
// 

function Child(props){
  console.log(props.hellotext)
}

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold underline text-blue-500"> Tailwind Practice </h1>
     <Child hellotext = 'Hello World'/> ;
    </>
  )
}

export default App


