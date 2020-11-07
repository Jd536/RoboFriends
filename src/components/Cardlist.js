import React from 'react';
// import {robots} from './robots';
import Card from './Card'
const Cardlist = ({robots}) => {
    // console.log(robots)
    const cardComponent = robots.map((user, i)=>{
        return  <Card id={robots[i].id} key={i} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div>
        {cardComponent}
      </div>
    )
}

export default Cardlist