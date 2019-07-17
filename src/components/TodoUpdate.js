import React, {Component} from 'react'
import {connect} from "react-redux";

class TodoUpdate extends Component{

    updateHandle = (e) => {
        this.props.dispatch({
            type:'UPDATEINPUT',
            data:{
                input:this.input.value,
                updating:true
            },
            id:this.props.input
        })
    }

    render() {
        return(
            <div>
                <h3>TodoUpdate</h3>
                <input type="text" ref={(input) => this.input = input} defaultValue={this.props.input}/>
                <button onClick={this.updateHandle}>Update</button>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {input:state.filter((item) => item.updating === true)[0].input}
}
export default connect(mapStateToProps)(TodoUpdate)