import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 30px;

  overflow: hidden;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  border-radius: 0px 0px 4px 4px;
`;

export const Title = styled.h2`
  text-align: center;

  text-transform: uppercase;

  padding: 30px 0;

  font-size: 22px;

  color: var(--gray-text);
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100px;
  height: 80px;

  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Label = styled.span`
  margin-bottom: 5px;

  font-size: 14px;

  font-weight: 500;

  color: var(--white-text);
`;

export const Percentage = styled.span`
  font-size: 24px;

  font-weight: 500;

  color: var(--white-text);
`;
