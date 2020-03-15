import { RouteComponentProps } from '@reach/router'
import React from 'react'
import {PlacesRouteProps} from '../Places/Places'

type Props = {
    component: React.FC,

} & RouteComponentProps & PlacesRouteProps

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Component {...rest} />
);

export default Route