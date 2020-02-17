import React from "react"
import ReactDom from "react-dom"
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            number : 5,
            start : false
        }
        setInterval( () =>{ this.state.start && this.setState({time : this.state.time + 1000})},1000 )
    }
     add = () => {
        this.setState({start: !this.state.start})
     }
     reset=() =>{
         this.setState({time:0})
     }
    render() {
        var s = Math.floor((this.state.time / 1000) % 60);
        var m = Math.floor((this.state.time / 60000) % 60);
        var h = Math.floor((this.state.time / 3600000) % 24);
        return (<div>
            <span>{this.state.hours}</span>
            <button onClick={this.add}> Start </button>
           <button onClick={this.reset} > Reset </button>
            {h.toString().padStart(2 , "0")} : {m.toString().padStart(2 , "0")} : {s.toString().padStart(2 , "0")}
        </div>

        )
    }
}
export default Timer