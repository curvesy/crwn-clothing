import React from "react";

import './custom-button.styles.scss';

const CustomButten = ({ children, isGoogleSignIn, ...otherProps }) => (
    <buttom className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>

        {children}

    </buttom>
);


export default CustomButten;