import styled, { css } from 'styled-components';

import { Box } from "../Box";
import { variant } from "styled-system";

const Grid = styled(Box)(
    css`
        display: grid;
        align-items: start;
    `,
    variant({
        variants: {
            full: {
                gridTemplateColumns: 'full',
            },
            half: {
                gridTemplateColumns: 'half',
                gridGap: 2,
            },
            third: {
                gridTemplateColumns: 'third',
                gridGap: 4,
            },
        }
    }))

const GridItem = styled(Box)({
    borderRadius: '0.2rem',
    padding: '0.5rem',
})

Grid.Item = GridItem;

export { Grid }