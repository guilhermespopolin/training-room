import styled from "styled-components/macro";

import { QUERIES } from "../../constants";

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin-inline: auto;
  padding-inline: 16px;

  @media ${QUERIES.laptopAndUp} {
    padding-inline: 32px;
  }
`;

export default MaxWidthWrapper;
