import React, { Component } from 'react'

class EventBind extends Component {
  
    constructor(props) {
      
        super(props)
    
      this.state = {
         message:'Hello'
      }

    //   this.clickhandler=this.clickhandler.bind(this)
    
    }
    

    // clickhandler(){
    //     this.setState({
    //         message:'Good bye'
    //     })
    //     console.log(this)
    // }

    clickhandler=()=>{
        this.setState({
            message:'Good bye'
        })
    }

    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* one way */}
        {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
        {/* other way using arrow functions */}
        {/* <button onClick={()=>this.clickhandler()}>Click</button> */}
        {/* or we can use by above 13 th line as */}
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
