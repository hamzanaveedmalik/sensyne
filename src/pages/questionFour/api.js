import React, { useState, useEffect } from "react";
import axios from "axios";

export const useApiRequest = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(url)
				.then((response) => {
					setIsLoading(true);
					setData(response.data);
				})
				.catch((error) => {
					setError(error);
				});
		};
		fetchData();
	}, [url]);

	return { error, isLoading, data };
};
