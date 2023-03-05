import React from 'react'



const Header = (props) => {
    
    const durationList =()=>{ props.tasks.map((task)=>task.duration);
        console.log('durationList',durationList);
    props.getDurationData(durationList);
    }
  return (
    <button onClick={()=>durationList()}>Click</button>
  )
}

export default Header