import React from 'react'
import Profile from './components/profile-ui/profile'
import user from './data/user.json'
import Statistics from './components/statistics-ui/statistics'
import statisticalData  from './data/statistical-data.json'
import FriendList from './components/friendlist-ui/friend-list'
import friends from './data/friends.json'
import TransactionHistory from './components/transactions-ui/transaction-history'
import transactions from './data/transactions.json'
import styles from './styles.module.css';



const App = () => {
  return (
    <div className={styles.container}>
      <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
    )
}

export default App
