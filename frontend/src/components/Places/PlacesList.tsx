import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../redux/actions'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const data = dispatch(getPlaces())
	}, [dispatch])

	return <div>Lista</div>
}

export default AddPlace
