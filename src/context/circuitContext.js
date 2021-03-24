import React, { Component } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom'

const CircuitContext = React.createContext();
//Provider
//Consumer



class CircuitProvidertest extends Component {
  state = {
    circuits: [],
    individualCircuit: [],
    moves: [],
    userInput: "",
    modalOpen: false,
    modalCircuit: [],
  };

  //Mounting the new set of values
  componentDidMount() {
    this.setCircuits()
    this.setMoves()
    // console.log("test");
  }

  setCircuits = () => {
    axios.get(`/circuits`).then((res) => {
      console.log(res.data, 'setCircuits function returning the circuits from the DB table')
      this.setState({circuits: res.data}) 
      })
      .catch(error=> console.log(error))
  };

  // setCircuitSelection = (id) => {
  //   axios.get(`/circuitselection/${id}`)
  //   .then( (res)=>{

  //     this.setState({individualCircuit: res.data})
  //     this.props.history.push()
  //   }
  //   )
  // }

  setMoves =(circuit_id)=>{
    axios.get(`/moves/${circuit_id}`)
    .then((res)=>{
      console.log(res.data, 'setMoves function')
      this.setState({moves: res.data})
      
  }).catch(err=>console.log(err))
  }


  getMove = (id) => {
    const circuitMove = this.state.circuits.find((move) => move.moves_id === id);
    return circuitMove;
  };

  handleDetail = (moves_id) => {
    axios.get(`/detailMove/${moves_id}`).then((res) => {
      this.setState({
        detailMove: res.data,
      });
    });
  };


  openModal = (id) => {
    const circuitMove = this.getMove(id);
    this.setState(() => {
      return {
        modalCircuit: circuitMove,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false,
      };
    });
  };


  render() {
    return (
      <CircuitContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
          setMoves: this.setMoves
        }}
      >
        {this.props.children}
      </CircuitContext.Provider>
    );
  }
}

const CircuitConsumer = CircuitContext.Consumer;
const CircuitProvider = withRouter(CircuitProvidertest)
// export withRouter(CircuitProvider)

 export  { CircuitProvider, CircuitConsumer, CircuitContext }
