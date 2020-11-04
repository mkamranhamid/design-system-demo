import React from "react";
import { Wrapper } from "./styled.components";

function Button({ children, icon, iconPlacement, ...props }) {
    return (
        <Wrapper {...props}>
            {iconPlacement && iconPlacement === 'left' && (
                icon
            )}
            {children}
            {iconPlacement && iconPlacement === 'right' && (
                icon
            )}
        </Wrapper>
    )
}

export { Button }