import React from 'react';
import { PropTypes } from 'prop-types';

export default function Heading({children, level, ...restProps}) {

    let levels = new Set ([1,2,3,4,5,6])
    let Element = 'h1'

    if(levels.has (level)) {
        Element = `h${level}`
    }

return <Element {...restProps}>{children}</Element>
}

Heading.propTypes = {
    level: PropTypes.oneOf([1,2,3,4,5,6]),
    children: PropTypes.node,
}