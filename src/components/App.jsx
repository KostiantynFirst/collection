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
      this.setState({ error: true, isLoading: false })
      console.log(error);
  }
};

deleteMaterial = async id => {
  try {
    await API.deleteMaterial(id);
    this.setState(state => ({
      materials: state.materials.filter(material => material.id !== id)
    }));
  } catch (error) {
    this.setState({ error: true})
    console.log(error);
  }
}

updateMaterial = async fields => {
  const updatedMaterial = await API.updateMaterial(fields);
  this.setState(state => ({
    materials: state.materials.map(material => material.id === fields.id ? updatedMaterial : material)
  }))
}

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <>
      <button onClick={this.updateMaterial}>XXX</button>
      {error && <p>Something goes wrong</p>}
      <MaterialEditor onSubmit={this.addMaterial} />
      {isLoading ? "Loading..." : <Materials items={materials} 
      onDelete={this.deleteMaterial}/>}
      </>
    )
  }
}