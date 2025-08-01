import React from 'react';

const ActionCard = ({ icon, title, description, label, onClick, isEmergency = false }) => {
    const cardClass = isEmergency ? 'action-card emergency' : 'action-card';
    
    return (
        <div className={cardClass} onClick={onClick}>
            <div className="action-icon"><i className={icon}></i></div>
            <h3>{title}</h3>
            <p>{description}</p>
            {label && <strong>{label}</strong>}
        </div>
    );
};

export default ActionCard;