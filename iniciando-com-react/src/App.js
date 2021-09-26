import React from "react";

class App extends React.Component {

  state = {
    nome : ''
  };

  modificaNome = (events) => {
    this.setState({ 
      nome: events.target.value 
    })
  };

  opcoesBox = () => {
    const opcoes = ["Esse?", "Ou esse?"]
    const comboOpcoesBox = opcoes.map( opcoes => <option>{opcoes}</option> )

    return (
      <select>
        {comboOpcoesBox}
      </select>
    )
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificaNome} />
        <h1>Hello{this.state.nome} </h1>
        { this.opcoesBox() }
      </>
    )
  }
}

export default App;