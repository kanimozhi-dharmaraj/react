import React from 'react'



const Header = (props) => {
    console.log('props',props);
   const getDuration=(index)=>{
    const durationData =  props.tasks.filter((task,index)=>
        task.duration
    )
    console.log('durationData',durationData[index]);
    props.get(durationData[index]);
   }
return(
    <div>
       {props.tasks.map((task,index)=>
        <h1 key={index}>{task.name}<button onClick={()=>getDuration(index)}>Click</button></h1>
       )} 
    </div>
)

}

export default Header