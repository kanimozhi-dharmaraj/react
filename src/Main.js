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
const Main = (props) => {
        const tasks =[{'name':'Write for Evato tuts','duration':120},
                    {'name':'Work Out','duration':60},
                    {'name':'Procrastinate on Dulingo','duration':240}];
const getDurationList=(data)=>{
    console.log('data',data);
    const fillteredData = tasks.filter((task)=>{
       return  task.duration<data.duration;
    })
    console.log(fillteredData);
    // fillteredData.map(()=>{
    //     var divEle =document.getElementById('detail');
    //     var h2Ele = document.createElement("h2");
    //     divEle.append(h2Ele);
    //     return h2Ele.innerHTML=JSON.stringify(fillteredData);
    // })
}

    return (
      <div>
        <Header tasks={tasks} get={getDurationList}/>
      </div>
      
    );
  }

export default Main