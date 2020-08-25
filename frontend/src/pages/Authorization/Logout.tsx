import React from 'react'
import { LogoutUser } from 'redux/actions/authActions'
import { useDispatch } from 'react-redux'
import {Button} from "components";
import {theme} from "App";

const Logout: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(LogoutUser())
    }

    return (
        <Button
            onClick={handleClick}
            text="Logout"
            color={theme.colors.green || ""}
        />

    )
}

export default Logout
