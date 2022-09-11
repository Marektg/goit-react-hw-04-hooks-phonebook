import React from "react";

const Filter = ({ filterHandler }) => {
   
        return (
            <> <h5>Find contact by name</h5>
                <input onChange={filterHandler}></input></>
    )




};

export default Filter;