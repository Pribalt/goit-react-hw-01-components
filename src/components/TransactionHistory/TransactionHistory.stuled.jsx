import styled from '@emotion/styled';

export const Th = styled.th`
  width: 170px;
  height: 30px;

  text-transform: uppercase;

  color: var(--white-text);

  background-color: var(--turquoise-bg);
  overflow: hidden;
`;

export const Td = styled.td`
  width: 170px;
  height: 30px;

  text-align: center;

  color: var(--gray-text);
`;

export const Tbody = styled.tbody`
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  border-radius: 0px 0px 4px 4px;
`;

export const Tr = styled.tr`
  :nth-of-type(2n) {
    background-color: var(--gray-bg);
  }
`;
