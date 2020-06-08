import {Link, RouteComponentProps, useParams} from '@reach/router'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import * as S from './PlacesList.styles'
import PlacesListElement from './PlacesListElement'
import usePlaces from '../../../assets/hooks/usePlaces'
import PlacesSearch from './PlacesSearch'
import {updateCoordinates} from "../../../redux/actions/globalActions";
import {useDispatch} from "react-redux";

interface Props
	extends RouteComponentProps<{
		places?: any[]
		placesLoading?: boolean
		id: string
	}> {}

interface Ref extends HTMLInputElement {
	disconnect: () => void
	observe(target: Element): void
}

const PlacesList: React.FC<Props> = ({}) => {
	interface PlaceValue {
		title: string
		_id: string
		placeImage: string
		placeType: string
	}

	const dispatch = useDispatch();

	const [isSearch, setIsSearching] = useState(false)
	const [pageNumber, setPageNumber] = useState(0)

	//@ts-ignore
	const [places, placesLoading, hasMoreData, placeType] = usePlaces(
		//@ts-ignore
		pageNumber,
		isSearch,
	)

	let observer = useRef<Ref | null>(null)

	const options = {
		rootMargin: '-50px',
	}

	const lastElement = useCallback(
		(node) => {
			if (placesLoading) return

			if (observer.current) observer.current.disconnect()

			const handleObserver = ([entry]: any): void => {
				if (entry.isIntersecting && places && hasMoreData) {
					setPageNumber((prevPage) => prevPage + 1)
				}
			}

			//@ts-ignore
			observer.current = new IntersectionObserver(handleObserver, options)

			if (node && observer.current) {
				observer.current.observe(node)
			}
		},
		[placesLoading],
	)

	useEffect(() => {
		setPageNumber(0)
	}, [placeType])

	useEffect(() => {
		const initialState = {
			lat: 52.163228,
			long: 22.269012,
			zoom: 15,
		}

		dispatch(updateCoordinates(initialState))
	}, []);

	return (
		<div>
			<PlacesSearch setIsSearching={setIsSearching} />
			<S.ListWrapper>
				{places.length > 0 && (
					<>
						{places.map((place: PlaceValue, index: number) => {
							const { title, _id, placeImage, placeType } = place

							if (places.length === index + 1 && places.length > 9) {
								return (
									<>
										<Link
											ref={lastElement}
											style={{ textDecoration: 'none' }}
											to={_id}
										>
											<button>

											</button>
											<PlacesListElement
												key={_id}
												_id={_id}
												title={title}
												placeImage={placeImage}
												placeType={placeType}
											/>
										</Link>
									</>
								)
							}

							return (
								<>
									<Link style={{ textDecoration: 'none' }} to={_id}>
										<PlacesListElement
											key={_id}
											_id={_id}
											title={title}
											placeImage={placeImage}
											placeType={placeType}
										/>
									</Link>
								</>
							)
						})}
					</>
				)}
			</S.ListWrapper>
		</div>
	)
}

export default PlacesList
