import React, { Component } from "react";
import ReactDOM  from 'react-dom'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            view: false 
        }
        //method binding
        this.addValue = this.addValue.bind(this)
    }
    addValue(){
        ReactDOM.render(
          <React.StrictMode>
            <Counter num={this.props.num +1}/>
          </React.StrictMode>,
          document.getElementById('block')
        )
      }
      // mount methodes
    //   commom method for mount amd update

      static getDerivedStateFromProps(p,s){
        console.log(`gat derived state from props`)
        console.log(`props =`,p)
        console.log(`state =`,s)
      }

      componentDidMount(){
        console.log(`component did Mount`);
      }

    //   update mounte
    shouldComponentUpdate(np,ns) {
        console.log(`should component update or not ?`)
        console.log(`newProps =`,np)
        console.log(`newState =`,ns)
        return true
    }

    getSnapshotBeforeUpdate(op,os){
        console.log(`get snapshot before update`)
        console.log(`oldProps =`,op)
        console.log(`oldState =`,os)
    }

    componentDidUpdate(op,os) {
        console.log(`copmonent did update`)
        console.log(`oldProps = `,op)
        console.log(`oldState = `,os)
        if(op.num === 9) {
            this.setState({
                view: true
            })
        }
    }

    // unmount method

    componentWillUnmount() {
        console.log(`component unmounterd successfully`);
    }
    render() {
        console.log('copmonent mounted')
        return(
          
            <div className="container">
                <h1>Counter</h1>

                <div className="first">
                    {
                        this.state.view ? (
                            <h1 className="success">WELCOM to Lifecycle</h1>
                        ) : (
                            <div>
                                <h1> Number = { this.props.num} </h1>
                                <h2 className="info">Nead More Counts</h2>
                                <button onClick={() => this.addValue() } className="btn-success">Add+1</button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Counter