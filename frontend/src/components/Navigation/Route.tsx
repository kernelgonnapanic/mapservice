import { RouteComponentProps } from '@reach/router'
import React from 'react'


type Props = {
    component: React.FC,

} & RouteComponentProps

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Component {...rest} />
)

export default Route