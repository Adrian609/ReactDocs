import React from 'react';

const style = {
    border: '2px solid darkblue',
    fontWeight: '800'
};

const Square = ({value, onClick}) => (
    <button style = {style} onClick= {onClick}>
        {value}
    </button>
);

export default Square;