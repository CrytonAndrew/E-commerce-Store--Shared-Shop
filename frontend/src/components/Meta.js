import React from 'react'
import {Helmet} from "react-helmet"

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta keyword="description" content={keywords}/>
        </Helmet>
    )
}

export default Meta
