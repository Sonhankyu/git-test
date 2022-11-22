import React from 'react';

const TestButton = ({children}) => {

    const onClickBtn = () => {
        alert('테스트 버튼임');
    }
    return (
        <button onClick={onClickBtn}>
            {children}
        </button>
    );
};

export default TestButton;