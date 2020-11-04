import React, { useState } from "react";

import { sortByDate, findText } from "../../util/common";

import { Header } from "../Header";

import { Box } from '../../components/Box'
import { ProjectList } from '../ProjectList'

function Projects({
    WrapperProps,
    ContainerProps,
    data,
}) {
    const [projectList, setProjectList] = useState(data)
    const [sortBy, setSortBy] = useState('')
    const [searchText, setSearchText] = useState('')

    const handleOnChangeSearch = (event) => {
        const { value } = event.target
        setSearchText(value)
    }
    const handleOnChangeSort = (value) => {
        setSortBy(value)
        switch (value) {
            case 'date':
                const sorted = sortByDate([...projectList], 'start date');
                setProjectList(sorted)
                break;
            default:
                setProjectList(data)
                break;
        }
    }
    const handleOnSubmitSearch = (searchQuery) => {
        const searchedProjects = findText(data, searchQuery);
        setProjectList(searchedProjects)
    }
    return (
        <Box {...WrapperProps}>
            <Box {...ContainerProps}>
                <Header
                    sortBy={sortBy}
                    onChangeSort={handleOnChangeSort}
                    searchText={searchText}
                    onChangeSearch={handleOnChangeSearch}
                    onSubmitSearch={handleOnSubmitSearch}
                />
                <ProjectList data-testid="projects" data={projectList} />
            </Box>
        </Box>
    )
}
Projects.defaultProps = {
    WrapperProps: {
        backgroundColor: 'blue.0',
        paddingY: 3,
    },
    ContainerProps: {
        width: 9 / 10,
        m: '0 auto',
    },

}

export { Projects }