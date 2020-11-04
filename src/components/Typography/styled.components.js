import styled, { css } from "styled-components";
import { variant } from "styled-system";

export const Wrapper = styled.p`
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize[0]}px;
    color: ${({ theme }) => theme.colors.black[3]};
    padding: 0;
    margin: 0;
    ${variant({
        variants: {
            ellipsis: css`
                color: inherit;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            `
        },
    })}
`;