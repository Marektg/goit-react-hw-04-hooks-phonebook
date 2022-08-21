import React from "react";

class Filter extends React.Component {
    render() {
        const { filterHandler } = this.props;
        return (
            <> <h5>Find contact by name</h5>
                <input onChange={filterHandler}></input></>
    )
}



};

export default Filter;