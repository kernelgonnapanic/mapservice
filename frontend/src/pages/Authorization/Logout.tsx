import React from 'react'
import { LogoutUser } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import {Button} from "../../components";

const Logout: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(LogoutUser())
    }

    return (
        <Button onClick={handleClick}>Logout</Button>

    )
}

export default Logout
