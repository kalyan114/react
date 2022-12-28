import React from 'react';

// function Greet(){
//     return <h1>Hello vishnu</h1>;
// }

const Greet=(name,heroname)=>{
    // console.log(props);
    return (
        <div>
            <h1>Hello {name} a.k.a {heroname}</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet;