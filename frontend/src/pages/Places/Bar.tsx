import React, { useEffect } from 'react';
import * as S from './Bar.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceTypeOptions } from '../../redux/actions/placesActions';
import { extractPlacesOptions } from '../../redux/selectors/placesSelectors';
import { updatePlaceType } from '../../redux/actions/placesActions';

const Bar: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const placeCategories = useSelector((state: any) =>
    extractPlacesOptions(state)
  );

  const handleClick = (category: any) => () => {
    dispatch(updatePlaceType(category));
  };

  useEffect(() => {
    dispatch(getPlaceTypeOptions());
  }, []);

  return (
    <S.BarWrapper>
      <S.Button onClick={handleClick('')}>
        <S.BarItem>All</S.BarItem>
      </S.Button>
      {placeCategories &&
        placeCategories.map((category: string) => {
          return (
            <S.Button key={category} onClick={handleClick(category)}>
              <S.BarItem>{category}</S.BarItem>
            </S.Button>
          );
        })}
    </S.BarWrapper>
  );
});

export default Bar;
