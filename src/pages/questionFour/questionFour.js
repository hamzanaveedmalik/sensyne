import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useApiRequest } from "./api.js";
import VaccinatedPeople from "./VaccinatedPeople";
import SearchBar from "./SearchBar";
import { PatientListProvider } from "./context";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100%",
		margin: "20px",
	},
}));

const QuestionFour = () => {
	const classes = useStyles();
	const API_ENDPOINT = `https://61ba219448df2f0017e5a929.mockapi.io/api/patients`;
	const { data, error, isLoading } = useApiRequest(API_ENDPOINT);

	return (
		<PatientListProvider>
			<div className={classes.container}>
				<SearchBar />
				<VaccinatedPeople data={data} error={error} isLoading={isLoading} />
			</div>
		</PatientListProvider>
	);
};

export default QuestionFour;
