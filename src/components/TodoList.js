import React, {Component} from 'react'
import {connect} from "react-redux";
import {Button} from 'react-bootstrap'

class TodoList extends Component{

    clickDel = (e) => {
        const target = e.target
        console.log(target.getAttribute('data-idx'))
        this.props.dispatch({
            type:'REMOVE',
            data:target.getAttribute('data-idx')
        })
    }

    clickUp = (e) => {
        const target = e.target;
        console.log(target.getAttribute('data-idx'));
        this.props.dispatch({
            type:'UPDATE',
            data:target.getAttribute('data-idx')
        })
    }

    render(){
        const todoLi = this.props.arr.map((item, index) => <li key={index}>{item.input}<Button data-idx={index} onClick={this.clickUp}>UPDATE</Button><Button data-idx={index} onClick={this.clickDel}>DELETE</Button></li>)
        return(
            <div>
                <h3>TodoList</h3>
                <ul>
                    {todoLi}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("TodoList",state);
    return {arr:state}
}
export default connect(mapStateToProps)(TodoList)