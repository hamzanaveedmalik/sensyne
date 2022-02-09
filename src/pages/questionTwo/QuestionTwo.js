import React, { useState, useEffect } from "react";
import { getCardDetails } from "./api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Error from "./Error";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const QuestionTwo = ({ classes }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getCardDetails()
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setHasError(true);
				setIsLoading(false);
			});
	}, []);

	const { title, imgSrc, body } = data;

	return (
		<div className={classes.container}>
			{isLoading ? (
				<CircularProgress />
			) : hasError ? (
				<Error />
			) : (
				<Card className={classes.card}>
					{imgSrc ? (
						<CardMedia className={classes.media} image={imgSrc} title={title} />
					) : (
						<Skeleton
							variant="rectangular"
							height={120}
							className={classes.media}
						/>
					)}
					<CardContent className={classes.content}>
						{title ? (
							<Typography gutterBottom variant="h5" component="h2">
								{title}
							</Typography>
						) : (
							<Skeleton variant="h5" component="h2" />
						)}

						{body ? (
							<div
								className={classes.body}
								dangerouslySetInnerHTML={{ __html: body }}
							/>
						) : (
							<Skeleton variant="rectangular" height={300} width={500} />
						)}
					</CardContent>
				</Card>
			)}
		</div>
	);
};

export default withStyles(styles)(QuestionTwo);
