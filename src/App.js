import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import AddUser from "./components/adduser";
import DisplayUser from "./components/displayuser";
import Play from "./components/play";

function App() {
  const [state, setState] = React.useState("home");
// delete useEffect then?
    if (state === "home") {
        return (
      <div className="App">
        <Header> </Header>
        <Home setState={setState} ></Home>
      </div>
      )
    } else if (state === "play"){
        console.log("state updated");
        return (
        <div className="App">
          <Header></Header>
          <Play setState={setState}></Play>
      </div>
      )
    } else if (state === "adduser") {
      return (
        <div className="App">
        <Header> </Header>
        <AddUser setState={setState}></AddUser>
      </div>
      )
    } else if (state ==="displayuser"){
      return (
        <div className="App">
          <Header> </Header>
          <DisplayUser setState={setState}></DisplayUser>
        </div>
      )
    }
  // return (
  //   <div className="App">
  //       <Header> </Header>
  //       <Home setState={setState}></Home>

  //   </div>
  //);
}

export default App;
