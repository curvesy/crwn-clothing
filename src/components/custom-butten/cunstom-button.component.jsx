import React from "react";

import './custom-button.styles.scss';

const CustomButten = ({ children, ...otherProps }) => (
    <buttom className="custom-button" {...otherProps}>

        {children}

    </buttom>
);


export default CustomButten;