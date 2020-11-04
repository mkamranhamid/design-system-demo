import styled from 'styled-components';
import { typography } from 'styled-system';
import { base } from "../../util/styled";
import { Wrapper } from "./styled.components";

const Typography = styled(Wrapper)`

  ${base}
  ${typography}
`;

Typography.defaultProps = {
  variant: null,
  as: null,
};

export { Typography }