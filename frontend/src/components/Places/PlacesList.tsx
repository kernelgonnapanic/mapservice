import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../redux/actions'
import { reducers } from '../redux/reducers'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	const places = useSelector(
		(state: ReturnType<typeof reducers>) => state.places,
	)

	console.log(places.data)

	useEffect(() => {
		dispatch(getPlaces())
	}, [dispatch])

	return <div>Lista</div>
}

export default AddPlace
