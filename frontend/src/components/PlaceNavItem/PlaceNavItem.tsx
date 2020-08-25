import React from 'react';
import {IconProps, Tooltip} from "@material-ui/core";
import * as S from "../../pages/Places/Bar.styles";
import {iconGradientColors} from 'assets/helpers/iconGradientColors'

interface Props extends IconProps {
    handleClick: (arg0: string) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    category: string,
    icon: any
}

const PlaceNavItem: React.FC<Props> = ({handleClick, category, icon}) => {

    // @ts-ignore
    const {color, color2} = iconGradientColors[category] || {}
    
    return (
        <S.Button key={category} onClick={handleClick(category)}>
            <Tooltip title={category}>
                <S.BarItem color={color} color2={color2}>
                    {icon}
                </S.BarItem>
            </Tooltip>
        </S.Button>
    );
};

export default PlaceNavItem;