import React from 'react'
import { LogoutUser } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const Logout: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(LogoutUser())
    }

    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default Logout
