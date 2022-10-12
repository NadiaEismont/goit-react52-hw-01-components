import user from '../user.json';
import { Profile } from './Profile';
import data from '../data.json';
import { Statistics } from './statistics/Statistics';

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
    </>
  );
};
