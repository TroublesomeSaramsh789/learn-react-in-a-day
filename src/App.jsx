
function App() {

  return (
    <div className="App">
      <HeadingComponent name="Sita" />
      { HeadingComponentTwo({name:"Ram"})}
    </div>
  )
}

export default App

//regular function
const HeadingComponent = function (props) {
  return <h1>Hello {props.name}</h1>
}
//arrow function
const HeadingComponentTwo =  (name) => {
  return <h1>Hello {name.name}</h1>
}