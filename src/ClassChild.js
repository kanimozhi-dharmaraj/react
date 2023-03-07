import React, { Component } from 'react'

export class ClassChild extends Component {
  render() {
    console.log('ClassChild',this);
    
    return (
      <div>
        {
            this.props.name.map((task,index)=>{
                return <h1 key={index}>{task.name}<button onClick={()=>this.props.get(task)}>Click</button></h1>
            })
        } 
      </div>
    )
  }
}

export default ClassChild