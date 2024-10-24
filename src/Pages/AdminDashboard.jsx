import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const handleLogout = () => {

    // Show logout success toast
    toast.success("Logout Successful!"); // Show success toast

    // Navigate to the home page
    navigate('/');
};
  // Mock data for demonstration
  const statistics = {
    totalUsers: 156,
    activeUsers: 89,
    totalBookings: 342,
    pendingBookings: 15,
    totalRevenue: '$45,780',
    monthlyGrowth: '+12.5%'
  };

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', joinDate: '2024-02-20' },
  ];

  const bookings = [
    { id: 1, type: 'Flight', user: 'John Doe', from: 'New York', to: 'London', date: '2024-11-15', status: 'Confirmed', amount: '$450' },
    { id: 2, type: 'Train', user: 'Jane Smith', from: 'Boston', to: 'Washington DC', date: '2024-10-25', status: 'Pending', amount: '$85' },
  ];

  const renderDashboard = () => (
    <div className="admin-stats-container">
      {Object.entries(statistics).map(([key, value]) => (
        <div key={key} className="admin-stat-card">
          <div className="admin-stat-value">{value}</div>
          <div className="admin-stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
        </div>
      ))}
    </div>
  );

  const renderUsers = () => (
    <table className="admin-table">
      <thead>
        <tr>
          <th className="admin-th">ID</th>
          <th className="admin-th">Name</th>
          <th className="admin-th">Email</th>
          <th className="admin-th">Status</th>
          <th className="admin-th">Join Date</th>
          <th className="admin-th">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="admin-td">{user.id}</td>
            <td className="admin-td">{user.name}</td>
            <td className="admin-td">{user.email}</td>
            <td className="admin-td">
              <span className={`admin-status admin-status-${user.status}`}>
                {user.status}
              </span>
            </td>
            <td className="admin-td">{user.joinDate}</td>
            <td className="admin-td">
              <button 
                className="admin-button admin-delete-button"
                onClick={() => console.log('Deleting user:', user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderBookings = () => (
    <table className="admin-table">
      <thead>
        <tr>
          <th className="admin-th">ID</th>
          <th className="admin-th">Type</th>
          <th className="admin-th">User</th>
          <th className="admin-th">From</th>
          <th className="admin-th">To</th>
          <th className="admin-th">Date</th>
          <th className="admin-th">Amount</th>
          <th className="admin-th">Status</th>
          <th className="admin-th">Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => (
          <tr key={booking.id}>
            <td className="admin-td">{booking.id}</td>
            <td className="admin-td">{booking.type}</td>
            <td className="admin-td">{booking.user}</td>
            <td className="admin-td">{booking.from}</td>
            <td className="admin-td">{booking.to}</td>
            <td className="admin-td">{booking.date}</td>
            <td className="admin-td">{booking.amount}</td>
            <td className="admin-td">
              <span className={`admin-status admin-status-${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </td>
            <td className="admin-td">
              {booking.status === 'Pending' && (
                <button 
                  className="admin-button admin-update-button"
                  onClick={() => console.log('Updating booking:', booking.id, 'to Confirmed')}
                >
                  Confirm
                </button>
              )}
              <button 
                className="admin-button admin-delete-button"
                onClick={() => console.log('Updating booking:', booking.id, 'to Cancelled')}
              >
                Cancel
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <Button variant="danger" onClick={handleLogout}>
                Logout
            </Button>
      </header>

      <div className="admin-tabs">
        <button 
          className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button 
          className={`admin-tab ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          Bookings
        </button>
      </div>

      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'users' && renderUsers()}
      {activeTab === 'bookings' && renderBookings()}
    </div>
  );
};

export default AdminDashboard;
