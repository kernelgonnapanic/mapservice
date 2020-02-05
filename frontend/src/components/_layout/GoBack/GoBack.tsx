import React from 'react'
import { ArrowLeft } from 'react-feather';
import { IconButton } from '@material-ui/core';

const GoBack: React.FC = () => {


    const navigateToPreviousRoute = () => {
        window.history.back()
    };

    return <>
        <IconButton onClick={navigateToPreviousRoute}>
            <ArrowLeft />
        </IconButton>
    </>

};

export default GoBack;