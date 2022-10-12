import user from '../user.json';
import { Profile } from './Profile';
import data from '../data.json';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import friends from '../friends.json';
import transactions from "../transactions.json";
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
    
  );
};
