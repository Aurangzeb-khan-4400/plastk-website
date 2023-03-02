import { css } from '@linaria/core';

import { styled } from 'linaria/react';

export const container = css`
  max-width: 1000px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const containerSm = css`
  max-width: 1000px;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: ${({ $invalid, noMargin }) => ($invalid || noMargin ? '0px' : '26px')};
  /* ${({ uploadFormGroup }) =>
    uploadFormGroup &&
    css`
      width: 100%;
      max-width: 9.6875rem;
    `} */
`;
