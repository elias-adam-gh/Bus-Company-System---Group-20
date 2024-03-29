import React from 'react';
import './DashboardCards.css';
import { FaUserPlus,
  FaChartLine,
  FaCoins,
  FaBriefcase,
  FaSuitcaseRolling,
  FaChair,
  FaGlassCheers,
  FaBusinessTime, FaBus, FaMapMarkedAlt, FaUsers, FaTicketAlt, FaDollarSign, FaTools, FaCommentDots, FaBell } from 'react-icons/fa';

const Card = ({ number, title, Icon, bgColor, borderColor }) => {
  const cardStyle = {
    backgroundColor: bgColor || '#F0F0F0',
    borderColor: borderColor || 'transparent',
    borderWidth: borderColor ? '1px' : '0',
    borderStyle: 'solid',
    padding: '30px',
    borderRadius: '10px',
    color: 'black',
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div style={cardStyle}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{number}</h2>
        <p>{title}</p>
      </div>
      <div>
      <Icon style={{ width: '50px', height: '50px' }} />
      </div>
    </div>
  );
};
const DashboardCards = () => {
  return (
    <div className="cardContainer">
      <Card number="56" title="Total Buses Operational" Icon={FaBus} bgColor="#E3F2FD" borderColor="#2196F3" />
      <Card number="750" title="Total Bookings Today" Icon={FaTicketAlt} bgColor="#EDE7F6" borderColor="#673AB7" />
      <Card number="$25K" title="Monthly Revenue" Icon={FaDollarSign} bgColor="#FCE4EC" borderColor="#E91E63" />
      <Card number="45" title="New Feedback" Icon={FaCommentDots} bgColor="#E0F7FA" borderColor="#00BCD4" />
      <Card number="30" title="New Users This Month" Icon={FaUserPlus} bgColor="#E8F5E9" borderColor="#4CAF50" />
      <Card number="1,200" title="Tickets Sold This Month" Icon={FaTicketAlt} bgColor="#FFF3E0" borderColor="#FF9800" />
      <Card number="651" title="Total Users" Icon={FaUsers} bgColor="#FFFDE7" borderColor="#FDD835" />
      <Card number="3,200" title="Total Tickets Sold" Icon={FaTicketAlt} bgColor="#F3E5F5" borderColor="#9C27B0" />
      <Card number="$50k" title="Total Profit This Month" Icon={FaCoins} bgColor="#ECEFF1" borderColor="#607D8B" />
      <Card number="$1M" title="Total Profit Overall" Icon={FaChartLine} bgColor="#E0F7FA" borderColor="#00BCD4" />
      <Card number="300" title="Economy Tickets Sold" Icon={FaSuitcaseRolling} bgColor="#FFEBEE" borderColor="#FFCDD2" />
      <Card number="150" title="Premium Tickets Sold" Icon={FaGlassCheers} bgColor="#F1F8E9" borderColor="#DCEDC8" />
      <Card number="50" title="Business Tickets Sold" Icon={FaBriefcase} bgColor="#E3F2FD" borderColor="#BBDEFB" />
      {/* Include other Card instances as before */}
    </div>
  );
};

export default DashboardCards;
