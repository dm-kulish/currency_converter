import React from "react";

const MainInput = ({onChange}) => {
    const changeVal = (event) => {
        onChange(event.target.value)
      }
    return (
        <input
            type="text"
            placeholder="enter amount"
            onChange={changeVal}
        >
        </input>
    )
}

export default MainInput;