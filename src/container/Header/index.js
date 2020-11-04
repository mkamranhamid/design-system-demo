import React, { useState } from "react";
import { Box } from '../../components/Box'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { Input } from "../../components/Input";
import { Switch } from "../../components/Switch";
import { Typography } from "../../components/Typography";

function Header({
    ButtonRowProps,
    ButtonWrapProps,
    ButtonProps,
    SearchFieldProps,
    FilterButtonProps,
    SearchContainerProps,
    sortBy,
    onChangeSort,
    onSubmitSearch,
}) {

    const [searchQuery, setSearchQuery] = useState('')
    const handleOnSubmit = (event) => {
        event.preventDefault();
        onSubmitSearch(searchQuery)
    }
    const handleOnChangeSort = (val, sortType) => {
        if (val) {
            onChangeSort(sortType)
            return
        }
        onChangeSort('')
    }
    return (
        <Box {...ButtonRowProps}>
            <Box {...ButtonWrapProps}>
                <Typography>Sort Date</Typography>
                <Switch setValue={(val) => handleOnChangeSort(val, 'date')} />
            </Box>
            <Box {...ButtonWrapProps}>
                <Box {...SearchContainerProps} onSubmit={handleOnSubmit}>
                    <SearchIcon />
                    <Input
                        type="text"
                        placeholder="Search description"
                        value={searchQuery}
                        onChange={({ target: { value } }) => setSearchQuery(value)}
                        {...SearchFieldProps} />
                </Box>
            </Box>
        </Box>
    )
}
Header.defaultProps = {
    ButtonRowProps: {
        width: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ButtonWrapProps: {
        marginY: 2,
    },
    ButtonProps: {
        backgroundColor: 'white.0',
        border: '1px solid',
    },
    FilterButtonProps: {
        mr: 2,
    },
    SearchContainerProps: {
        display: 'flex',
        alignItems: 'center',
        as: 'form',
        width: 150,
    },
    SearchFieldProps: {
        width: 9 / 10
    },
}

export { Header }