import React, {Component} from 'react'
import {connect} from "react-redux";
import {Button} from 'react-bootstrap'

class TodoInput extends Component{


    clickHandle = (e) => {
        this.props.dispatch({
            type:'ADD',
            data:{
                input:this.input.value,
                updating:false
            }
        })
    }

    render(){

        return(
            <div>
                <h3>TodoInput</h3>
                <input type="text" ref={(input) => this.input = input}/>
                <Button onClick={this.clickHandle}>Click</Button>
            </div>

        )
    }
}
export default connect()(TodoInput)