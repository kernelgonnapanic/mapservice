import React from 'react'
import { ArrowLeft } from 'react-feather';
import { IconButton } from '@material-ui/core';

interface Props {
    customStyle?: object
};

const GoBack: React.FC<Props> = ({ customStyle = {} }) => {

    const navigateToPreviousRoute = () => {
        window.history.back()
    };

    return <>
        <IconButton style={customStyle} onClick={navigateToPreviousRoute}>
            <ArrowLeft />
        </IconButton>
    </>

};

export default GoBack;