import React from "react";

const Hello=()=>{
    //using jsx syntax...
    return (
        // <div className="dummyclass"></div>
        <div>
            <h1>Hello Vishnu!!!</h1>
        </div>
    )

    //without using jsx syntax...
    // return React.createElement(
    //     'div',
    //     null,
    //     // {id:'hello',className='dummyclass'},
    //     React.createElement('h1',null,'Hello Vishnu!!!')
    // );
}

export default Hello