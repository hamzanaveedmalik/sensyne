import React, { useState, createContext } from "react";

const initialState = {
	searchedPatients: [],
};

export const PatientListContext = createContext();

export const PatientListProvider = ({ children }) => {
	const [patientsList, setPatientsList] = useState(initialState);

	return (
		<PatientListContext.Provider value={[patientsList, setPatientsList]}>
			{children}
		</PatientListContext.Provider>
	);
};
