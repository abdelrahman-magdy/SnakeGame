import React from 'react';

export default ({foodLocation}) => {
    
    const style={
        left:`${foodLocation[0]}%`,
        top:`${foodLocation[1]}%`
    }

    return(
        <div className="food-snake" style={style}></div>
    )
}