import React from 'react';
import Alert from '@mui/material/Alert';

const Error = () => {
    return (
        <div>
            <h1>
                <Alert severity='error'>
                    Something went wrong while fetching the data! Please try
                    again later.
                </Alert>
            </h1>
        </div>
    );
};

export default Error;
