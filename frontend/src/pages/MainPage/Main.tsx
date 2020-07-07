import React from 'react'
import MainLogo from '../../assets/images/main-page.svg'
import Cycle from '../../assets/images/undraw_Ride_a_bicycle_2yok.svg'
import styled from 'styled-components'

const StyleDiv = styled.div`
	// width:500px;
	margin: 0 180px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100%;
`

const StyledImg = styled.div`
       display: flex;
       height: 100%;
       justify-content: 'center';
       align-items: 'center';
`

const Main = () => {


    return <StyleDiv>
        <div>
        </div>
        <StyledImg>
            <img src={Cycle} alt="test" style={{width: '85%'}}/>
        </StyledImg>
    </StyleDiv>
}

export default Main
