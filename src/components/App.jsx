import data from '../DATA/data.json';
import friends from '../DATA/friends.json';
import transactions from '../DATA/transactions.json';
import user from '../DATA/user.json';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
