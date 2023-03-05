import React from 'react'
import Header from './Header';

// const Main = (props) => {
//     const tasks =[{'name':'Write for Evato tuts','duration':120},
//                 {'name':'Work Out','duration':60},
//                 {'name':'Procrastinate on Dulingo','duration':240}];
      

//   return (
//     <div>{tasks.forEach((task)=>
//     <h1 key={task.name}>task.name</h1>)}
//     </div>
//   );
// }

const Main = () => {
        const tasks =[{'name':'Write for Evato tuts','duration':120},
                    {'name':'Work Out','duration':60},
                    {'name':'Procrastinate on Dulingo','duration':240}];

const getDurationData = (data)=>{
    console.log('data',data);
}   
    return (
      <div>
        {tasks.map((task,index)=>
        <h1 key={index}>{task.name}</h1>)}
        <Header tasks={tasks} getDurationData={getDurationData} />
      </div>
      
    );
  }

export default Main