import React from 'react';
function Welcome(props){
  return(
    <div className="container">
        <div className="">
            <h1 className="text-center">Welcome {props.username}</h1>
        </div>
    </div>
  )
};
export default Welcome
