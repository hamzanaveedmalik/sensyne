import React, { useState, useEffect } from 'react';
import { getCardDetails } from './api';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Error from './Error';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

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
                    <CardMedia
                        className={classes.media}
                        image={imgSrc}
                        title={title}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {title}
                        </Typography>
                        <div
                            className={classes.body}
                            dangerouslySetInnerHTML={{ __html: body }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default withStyles(styles)(QuestionTwo);
