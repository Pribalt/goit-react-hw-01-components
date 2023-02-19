import styled from '@emotion/styled';

export const Status = styled.span`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
