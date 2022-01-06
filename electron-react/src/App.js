
import React, { Component } from 'react';
const {dialog} = window.require('electron').remote;  
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs:[]
    };
  }
  onOpen(){
    
   let imgs = dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
   this.setState(
     {
        imgs:imgs
     }
   );
  }
  render(){
    return (
      <div className="App">
        <h1>React + Electron ex</h1>
        <button onClick={this.onOpen.bind(this)}>Open</button>
        <h2>Ima</h2>
        {this.state.imgs.map((img, i) => {
          <img src={img} alt= "image for {img}" key={i}/>
        })}
      </div>
    );
  }
  
}

export default App;
