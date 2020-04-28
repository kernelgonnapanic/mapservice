import { Link, RouteComponentProps } from '@reach/router'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import * as S from './PlacesList.styles'
import PlacesListElement from './PlacesListElement'
import usePlaces from '../../../assets/hooks/usePlaces'
import PlacesSearch from './PlacesSearch'
import { usePrevious } from '../../../assets/hooks'

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

	const [isSearch, setIsSearching] = useState(false)
	const [pageNumber, setPageNumber] = useState(0)

	//@ts-ignore
	const [places, placesLoading, hasMoreData, placeType] = usePlaces(
		//@ts-ignore
		pageNumber,
		isSearch,
	)

	const prevPlaceType = usePrevious(placeType)

	let observer = useRef<Ref | null>(null)

	const options = {
		rootMargin: '-50px',
	}

	const lastElement = useCallback(
		node => {
			if (placesLoading) return

			if (observer.current) observer.current.disconnect()

			const handleObserver = ([entry]: any): void => {
				if (entry.isIntersecting && places && hasMoreData) {
					setPageNumber(prevPage => prevPage + 1)
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

	console.log(placeType)

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
