import React from 'react';

const Ingredients = (props) => {
  return (
    <React.Fragment>
        <br />
        <br />
        <span>
            <strong><u>Ingredients</u></strong>: {props.ingredients}
        </span>
    </React.Fragment>
  );
}

export default Ingredients;