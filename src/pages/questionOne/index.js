import React from 'react'
import Question from './question'
import QuestionOne from './QuestionOne'
import ErrorBoundary from '../../components/errorBoundary'

const QuestionOneWrapper = () =>{
	return (
		<ErrorBoundary question={Question}>
			<QuestionOne />
		</ErrorBoundary>
	)
}
export default QuestionOneWrapper