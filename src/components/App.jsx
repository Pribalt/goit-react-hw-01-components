import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from 'components/App.styled';
import { GlobalStyles } from 'components/GlobalStyles';
import user from 'data.json/user.json';
import data from 'data.json/data.json';
import friends from 'data.json/friends.json';
import transactions from 'data.json/transactions.json';

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Profile user={user} />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
