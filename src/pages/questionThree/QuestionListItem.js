import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(() => ({
	header: {
		fontWeight: "bold",
		display: "inline",
		marginRight: 4,
	},
	label: {
		display: "inline",
	},
}));

const QuestionListItem = ({ item, divider }) => {
	const { icon, name, species, id, description } = item;
	const Icon = icon;
	const classes = useStyles();
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar>
						<Icon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					disableTypography
					primary={`${name}: ${species ? species : "Other"}`}
					secondary={
						<>
							<div>
								<Typography variant="subtitle2" className={classes.header}>
									Description:
								</Typography>
								<Typography variant="body2" className={classes.label}>
									{description}
								</Typography>
							</div>
							<div>
								<Typography variant="subtitle2" className={classes.header}>
									Guid:
								</Typography>
								<Typography variant="body2" className={classes.label}>
									{id ? id : "ERROR "}
								</Typography>
							</div>
						</>
					}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</>
	);
};

export default QuestionListItem;
