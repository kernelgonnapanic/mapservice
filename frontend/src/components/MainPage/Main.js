import React, { useRef, useEffect } from 'react'
import TweenLite from 'gsap'
import { relative } from 'path'

const Main = () => {
	let testRef = useRef(null)

	useEffect(() => {
		TweenLite.to(testRef, 1, { x: -100 })
	}, [])

	console.log(testRef)

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div ref={ref => (testRef = ref)}>Turystyczne Siedlce</div>
		</div>
	)
}

export default Main
