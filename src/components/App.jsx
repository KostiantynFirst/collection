import { Component } from "react";
import { MaterialEditor } from "./MaterialEditor";
import * as API from 'services/api'
import { Materials } from "./Materials";

export class App extends Component {
  state = { 
    materials: [],
    isLoading: false,
    error: false,
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterial();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false })
      console.log(error);
    }
  }

   addMaterial = async(values) => {

    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }))
    } catch (error) {
      console.log(error);
  }
};

  render() {
    const { materials } = this.state;
    return (
      <>
      <MaterialEditor   
        onSubmit={this.addMaterial} 
      />
      <Materials items={materials}/>
      </>
    )
  }
}