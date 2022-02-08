import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const QuestionOne = () => {
    const [counter, setCounter] = useState(0);
    const [label, setLabel] = useState(`I've been clicked: ${counter} times`);

    const handleClick = () => {
        setCounter(counter + 1);
        setLabel(`I've been clicked: ${counter + 1} times`);
    };

    return (
        <div style={{ marginTop: 48 }}>
            <Button variant='contained' onClick={handleClick}>
                {label}
            </Button>
        </div>
    );
};

export default QuestionOne;
