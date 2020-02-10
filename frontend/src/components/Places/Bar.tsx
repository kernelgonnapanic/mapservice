import React from 'react'
import * as S from './Bar.styles'
import { GoBack } from '../_layout'


const Bar: React.FC = () => {
    return (
        <S.BarWrapper>
            <GoBack />
        </S.BarWrapper>
    )
}

export default Bar
