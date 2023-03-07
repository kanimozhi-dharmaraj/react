import React, { Component } from 'react'
import ClassChild from './ClassChild'

export class Class extends Component {
   
  render() {
    const tasks =[{'name':'Write for Evato tuts','duration':120},
    {'name':'Work Out','duration':60},
    {'name':'Procrastinate on Dulingo','duration':240}];
    const getDurationList=(data)=>{
        const fillteredData = tasks.filter((task)=>{
           return  task.duration<data.duration;
        })
        console.log(fillteredData);
    }
    return (
      <div>
      <ClassChild name={tasks} get={getDurationList} />
      </div>
    )
  }
}


export default Class