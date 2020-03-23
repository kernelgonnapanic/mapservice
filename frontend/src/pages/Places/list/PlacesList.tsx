import {Link, RouteComponentProps} from '@reach/router'
import React, {useCallback, useEffect, useRef} from 'react'
import * as S from './PlacesList.styles'
import PlacesListElement from './PlacesListElement'
import {CircularProgress} from "@material-ui/core";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {extractPlaces} from "../../redux/selectors/placesSelectors";
import {getPlaces} from "../../redux/actions";
import {getPlacesList} from "../../redux/api";

interface Props extends RouteComponentProps <{
    places?: any[],
    placesLoading?: boolean
    id: string,
}> {}



const PlacesList: React.FC<Props> = React.memo(({
										 // places,
                                         // placesLoading
                                     }) => {

    interface PlaceValue {
        title: string
        _id: string
        placeImage: string,
        placeType: string
    }


    const observer = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const {places, placesLoading, } = useSelector((state: any) => {
        return {
            places: extractPlaces(state),
            placesLoading: state.places.loadingPlaces,

        }
    }, shallowEqual);


    const options = {
        rootMargin: '-50px',
    };

    const lastElement = useCallback(node => {
        if(placesLoading) return;
        //@ts-ignore
        observer.current = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting && places && places.length > 8){


                dispatch(getPlaces(10, 1));
            }
        }, options);

        if(node ) {
            //@ts-ignore
            observer.current.observe(node)
        }

        //@ts-ignore
        // if(observer.current) observer.current.disconnect();

    }, [placesLoading]);


    //
    // useEffect(() => {
    //
    //     if(placesLoading) return;
    //
    //     if(places){
    //         const observer = new IntersectionObserver(([entry]) => {
    //             // console.log(lastElement);
    //             if(entry.isIntersecting){
    //                 // console.log(entry);
    //                 // dispatch(getPlaces(10, 1));
    //                 // getPlacesList(10, 1).then(response => {
    //                 //    console.log(response.data.data);
    //                 // });
    //             }
    //         }, options);
    //
    //         // if(observer.current){
    //         //     const lastElement = observer.current.children[observer.current.children.length - 1];
    //         //     observer.observe(lastElement)
    //         // }
    //         //
    //         // return () => {
    //         //     if(ref.current){
    //         //         const lastElement = observer.current.children[observer.current.children.length - 1];
    //         //         observer.unobserve(lastElement)
    //         //     }
    //         // }
    //
    //     }
    //
    //
    // }, [observer, options, dispatch, places]);


    useEffect(() => {
        console.log("MOUNT");

        dispatch(getPlaces(10, 0));
    }, []);

    return (
        <div style={{height: "10000px"}}>
            <S.ListWrapper >
        {/*<S.ListWrapper ref={observer}>*/}
            {!placesLoading && places ?
                 places.map((place: PlaceValue, index: number) => {
                    const {title, _id, placeImage, placeType} = place;

                    if(places.length === index + 1) {
                        return <>
                            <Link ref={lastElement} style={{textDecoration: "none"}} to={_id} >
                                <PlacesListElement   key={_id} _id={_id} title={title} placeImage={placeImage} placeType={placeType}/>
                            </Link>
                        </>
                    }

                    return (
                        <>
                            <Link style={{textDecoration: "none"}} to={_id} >
                                <PlacesListElement key={_id} _id={_id} title={title} placeImage={placeImage} placeType={placeType}/>
                            </Link>
                        </>

                    )
                })
                : <div style={{display: "flex", justifyContent: "center"}}>
                    <CircularProgress/>
                </div>}
        </S.ListWrapper>
        </div>
    )
});

export default PlacesList
