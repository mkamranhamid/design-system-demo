import React, { useState, useEffect, useRef } from "react";

import { fetchProjects } from "../../api/project";

import { Projects } from '../Projects'

import { Box } from '../../components/Box'
import { Loader } from '../../components/Loader'

function Home({ LoaderProps }) {
    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)
    const _isMounted = useRef(true);
    const getProducts = async () => {
        if (!_isMounted.current) return;
        try {
            const json = await fetchProjects();
            setProjects(json)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    useEffect(() => {
        getProducts();
        return () => { // ComponentWillUnmount in Class Component
            _isMounted.current = false;
        }
    }, []);

    if (loading) return (
        <Box {...LoaderProps}>
            <Loader data-testid="main-loader" />
        </Box>
    )
    return (
        <Projects data={projects} />
    )
}

Home.defaultProps = {
    LoaderProps: {
        width: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
}

export { Home }