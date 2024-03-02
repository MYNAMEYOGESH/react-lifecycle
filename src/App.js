
import React, { Component } from "react";
import"./App.css"
import ReactDOM from 'react-dom'
import Counter from "./component/Counter";
class App extends Component {
  constructor(props) {
    super(props)
  }
// mounting compounent
  mount(){
    // console.log('component mounted');
    ReactDOM.render(
      <React.StrictMode>
        <Counter num={0}/>
      </React.StrictMode>,
      document.getElementById('block')
    )
  }
// unmounting component
  remove(){
    ReactDOM.unmountComponentAtNode(document.getElementById('block'))
    console.log('component unmounted');
  }

  render(){
    return(
      <div className="container">
        <h1> React lifecycle</h1>
        <div className="buttons">
        <button onClick={() => this.mount()} className="btn-success">Mount</button>
        <button onClick={() => this.remove()} className="btn-warning">UnMounte</button>
        </div>
        <section id="block">

        </section>
      </div>

    )
  }
}

export default App