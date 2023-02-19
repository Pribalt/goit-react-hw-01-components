import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 10px;
  gap: 5px;

  width: 180px;
  height: 50px;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
