import { useState } from 'react';
import './App.css';
import notifications from './notifications';

function App() {
  const [notificationsList, setNotificationsList] = useState(notifications);

  const clearNotification = (id) => {
    setNotificationsList(notificationsList.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotificationsList([]);
  };

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>{notificationsList.length} notification(s)</p>
      
      <ul className="notifications-list">
        {notificationsList.map(notification => (
          <li key={notification.id} className="notification-item">
            <div className="notification-content">
              <strong>{notification.name}:</strong> {notification.message}
            </div>
            <button 
              onClick={() => clearNotification(notification.id)}
              className="clear-button"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>

      <button 
        onClick={clearAllNotifications} 
        disabled={notificationsList.length === 0}
        className="clear-all-button"
      >
        Clear All Notifications
      </button>
    </div>
  );
}

export default App;