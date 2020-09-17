import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import AddUser from "./components/adduser";
import DisplayUser from "./components/displayuser";
import Play from "./components/play";

function App() {
  const usernames = ["aissshah", "akomiqaia", "Albadylic", "Alexreid95", "Azizi-A", "CampbellDocherty", "Chloeh24", "fairyaksh", "ephieo", "glrta", "hannahgooding", "HettieM", "itsina96", "Ivo-Evans", "jackherizsmith", "jamesj-0", "jenndroid", "jessica440", "jhart5", "Jihyun-Jang", "Joepock123", "khadija-nur", "LiCern", "Lizzy-j", "mhtien", "Netceer", "oliverjam", "RihardsJ", "Roger-Heathcote", "amberrignell", "RunGT", "sofer", "tacotoemeck", "trishtracking", "yvonne-liu", "VatsKan"];

  const [state, setState] = React.useState("home");
    if (state === "home") {
        return (
      <div className="App">
        <Header> </Header>
        <Home setState={setState} usernames={usernames}></Home>
      </div>
      )
    } else if (state === "play"){
        console.log("state updated");
        return (
        <div className="App">
          <Header></Header>
          <Play setState={setState} usernames={usernames}></Play>
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
