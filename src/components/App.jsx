import { Component } from "react";
import { MaterialEditor } from "./MaterialEditor";

export class App extends Component {
  state = { 
    materisls: [];
  }
  
  render() {
    return (
      <MaterialEditor onSubmit={console.log} />
    )
  }
}