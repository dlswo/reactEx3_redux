import React, {Component} from 'react'
import {connect} from "react-redux";

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
        const todoLi = this.props.arr.map((item, index) => <li key={index}>{item}<button data-idx={index} onClick={this.clickUp}>UPDATE</button><button data-idx={index} onClick={this.clickDel}>DELETE</button></li>)
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
const mapStateToProps = (action) => {
    return {arr:action}
}
export default connect(mapStateToProps)(TodoList)