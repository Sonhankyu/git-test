import React from 'react';

const TestButton = () => {
    const onClick = () => {
        alert('버튼 눌림');
    }
    return (
        <button onClick={onClick} style={{width: '10rem', height: '5rem',background: 'black', color: 'white'}}>
            테스트 버튼임
        </button>
    );
};

export default TestButton;