import React, {Component} from 'react'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import TodoUpdate from "./TodoUpdate";

class TodoComponent extends Component{
    render(){
        return(
            <div>
                <h3>TodoComponent</h3>
                {this.props.check ? <TodoUpdate></TodoUpdate> : <TodoInput></TodoInput>}
                <TodoList></TodoList>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {check:state.filter((item) => item.updating === true).hasOwnProperty(0)};
}
export default connect(mapStateToProps)(TodoComponent)