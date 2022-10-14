import user from '../user.json';
import { Profile } from './Profile/Profile';
import data from '../data.json';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import friends from '../friends.json';
import transactions from "../transactions.json";
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        />
      </Section>
      <Section>
    <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
        </Section>
    </>
    
  );
};
