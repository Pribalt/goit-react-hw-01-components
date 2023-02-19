import styled from '@emotion/styled';

export const User = styled.div`
  margin-bottom: 30px;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  border-radius: 0px 0px 4px 4px;
`;

export const Description = styled.div`
  padding: 35px 0;

  background-color: var(--white-bg);
`;

export const Avatar = styled.img`
  margin: 0 auto 35px;

  width: 150px;
  height: 150px;

  border-radius: 50%;
`;

export const UserName = styled.h2`
  text-align: center;

  margin-bottom: 10px;

  font-size: 24px;

  color: var(--black-text);
`;

export const Tag = styled.p`
  text-align: center;

  margin-bottom: 10px;

  font-size: 16px;

  color: var(--gray-text);
`;

export const Location = styled.p`
  text-align: center;

  font-size: 16px;

  color: var(--gray-text);
`;

export const List = styled.ul`
  display: flex;

  background-color: var(--gray-bg);

  border-radius: 0px 0px 4px 4px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-top: 1px solid var(--border-gray-bg);

  width: 100px;
  height: 80px;

  :not(:last-child) {
    border-right: 1px solid var(--border-gray-bg);
  }
`;

export const Label = styled.span`
  text-align: center;

  margin-bottom: 5px;

  font-size: 14px;

  color: var(--gray-text);
`;

export const Quantity = styled.span`
  text-align: center;

  font-size: 18px;
  font-weight: 700;

  color: var(--black-text);
`;
