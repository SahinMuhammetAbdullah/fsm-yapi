import React from 'react';

const ServiceCard = ({ icon, title, items }) => {
  return (
    <div className="service-card">
      <h3>
        <i className={icon}></i>
        {title}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;