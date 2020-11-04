import React from "react";

import { currencySymbol, formatDate } from "../../util/common";

import { Box } from '../../components/Box'
import { Grid } from '../../components/Grid'
import { Typography } from '../../components/Typography'
import { Tag } from '../../components/Tag'

import { ReactComponent as BrainIcon } from '../../assets/icons/brain.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as FrameIcon } from '../../assets/icons/Frame.svg'

function ProjectList({
    GridProps,
    GridItemProps,
    DescriptionProps,
    InlineProps,
    InlineTextProps,
    FeaturesProps,
    TagProps,
    data,
    ...props
}) {
    return (
        <Grid {...props} {...GridProps}>
            {data && data.map((project, ind) => (
                <Grid.Item {...GridItemProps} key={project['start date'] + ind}>
                    <Tag {...TagProps}>{project.category}</Tag>
                    <Box {...InlineProps}>
                        <Typography {...InlineTextProps} {...DescriptionProps}>{project.description}</Typography>
                        <Typography {...InlineTextProps}>{currencySymbol(project.currency)}</Typography>
                    </Box>
                    <Typography {...FeaturesProps}><FrameIcon /> {formatDate(project['start date'])}</Typography>
                    <Typography {...FeaturesProps}><BrainIcon /> {project.complexity}</Typography>
                    <Typography {...FeaturesProps}><UserIcon /> {project.responsible}</Typography>
                </Grid.Item>
            ))}
            {(!data || !data.length) && (
                <Grid.Item {...GridItemProps}>
                    <Typography {...FeaturesProps}>No project found for the entered query</Typography>
                </Grid.Item>
            )}
        </Grid>
    )
}
ProjectList.defaultProps = {
    GridProps: {
        variant: ['full', 'half', 'third'],
    },
    GridItemProps: {
        backgroundColor: 'white.0',
        paddingX: 3,
        paddingY: 2,
        mb: [2, 0],
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    InlineProps: {
        width: 1,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        mb: 3,
    },
    InlineTextProps: {
        fontSize: 3,
        color: 'black.3',
    },
    DescriptionProps: {
        width: 9 / 10,
        variant: 'ellipsis',
    },
    FeaturesProps: {
        width: 1,
        color: 'black.0',
        marginY: 1,
    },
    TagProps: {
        as: 'span',
        backgroundColor: 'blue.0',
        color: 'blue.1',
        marginY: 1,
        fontWeight: 'bold',
    },
}
export { ProjectList }