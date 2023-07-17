import { Component } from "react";
import { MaterialEditor } from "./MaterialEditor";

export class App extends Component {
  render() {
    return (
      <MaterialEditor onSubmit={console.log} />
    )
  }
}