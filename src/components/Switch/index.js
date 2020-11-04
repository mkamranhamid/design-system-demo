import React, { useState } from "react";
import { Box } from "../Box";
import { Input, Label } from "./styled.component";

function Switch({ value, setValue, props }) {
    const [inputValue, setInputValue] = useState(value);
    const handleSetValue = (event) => {
        const { checked } = event.target
        setInputValue(checked)
        setValue(checked)
    }
    return (
        <Box {...props}>
            <Input
                type="checkbox"
                id="switch"
                checked={inputValue}
                onChange={(event) => handleSetValue(event)} />
            <Label htmlFor="switch">Toggle</Label>
        </Box>
    )
}

Switch.defaultProps = {
    value: false
}

export { Switch }