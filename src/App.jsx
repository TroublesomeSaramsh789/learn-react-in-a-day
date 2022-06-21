import React from "react";
//Pages
import InfoPage from './pages/InfoPage';
import AboutPage from './pages/About.Page';
import FormPage from './pages/Form.Page';

function App() {
  //navigation
  const [activeNav, setActiveNav] = React.useState("home");

  const navBarClickHandler = (link) => {
    setActiveNav(link); // toggle
  }

  return (
    <div className="App">
      <nav>
        <li onClick={() => navBarClickHandler("home")}><h2>Home</h2></li>
        <li onClick={() => navBarClickHandler("form")}><h2>Form</h2></li>
        <li onClick={() => navBarClickHandler("about")}><h2>About</h2></li>
      </nav>
      <div className='container'>
        {activeNav === "home" ?  <InfoPage /> : null}
        {activeNav === "form" ? <FormPage /> : null}
        {activeNav === "about" ? <AboutPage /> : null}
      </div>
    </div>
  )
}

export default App
