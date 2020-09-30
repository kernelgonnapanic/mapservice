import React, { useRef, useEffect } from 'react'
import TweenLite from 'gsap'

const Main = () => {
	let testRef = useRef(null)

	useEffect(() => {
		TweenLite.to(testRef, 1, { x: -100 })
	}, [])

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div ref={(ref) => (testRef = ref)}>Turystyczne Siedlce</div>
		</div>
	)
}

export default Main
