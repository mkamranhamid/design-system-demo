import styled from "styled-components";

import { Typography } from "../Typography";

export const Wrapper = styled(Typography)`
    padding: 4px 16px;
    font-size: ${({theme})=>theme.fontSize[0]}px;
`;