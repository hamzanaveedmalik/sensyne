import React from 'react';
import QuestionThree from './QuestionThree';
import Question from './question';
import ErrorBoundary from '../../components/errorBoundary';
const questionThree = () => {
    return (
        <ErrorBoundary question={Question}>
            <QuestionThree />
        </ErrorBoundary>
    );
};

export default questionThree;
