import React, {Component} from 'react'
import {connect} from "react-redux";

class TodoInput extends Component{


    clickHandle = (e) => {
        const input = this.input.value;
        console.log("clickHandle")
        this.props.dispatch({
            type:'ADD',
            data:{input, updating:false}
        })
    }

    render(){

        return(
            <div>
                <h3>TodoInput</h3>
                <input type="text" ref={(input) => this.input = input}/>
                <button onClick={this.clickHandle}>Click</button>
            </div>

        )
    }
}
export default connect()(TodoInput)