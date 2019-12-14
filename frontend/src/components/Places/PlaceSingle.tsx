import React, { useEffect } from 'react'
import { getSinglePlace } from '../redux/actions'
import { useDispatch } from 'react-redux'

interface Props {}

const PlaceSingle: React.FC<Props> = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSinglePlace('5dcdd0795ce6a63268748f8d'))
	}, [dispatch])

	return <div>TESTxd</div>
}

export default PlaceSingle
