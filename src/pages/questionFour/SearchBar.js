import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { PatientListContext } from "./context";

export default function SearchBar() {
	const [results, setResults] = useContext(PatientListContext);

	const onChange = (e) => {
		console.log("", e.target.value);
	};

	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				m: "10px 10px",
				display: "flex",
				alignItems: "center",
				width: "40%",
			}}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Patients .."
				onChange={onChange}
			/>
			<SearchIcon />
		</Paper>
	);
}
