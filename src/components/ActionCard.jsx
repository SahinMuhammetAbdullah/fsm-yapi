import React from 'react';

const ActionCard = ({ icon, title, description, label, onClick, type, isEmergency = false }) => {
    // Tıklanabilir olmayan kartlar için cursor stilini değiştir
    const cardClass = `action-card ${isEmergency ? 'emergency' : ''} ${type === 'info' ? 'info-card' : ''}`;
    
    return (
        <div className={cardClass} onClick={type !== 'info' ? onClick : null}>
            <div className="action-icon"><i className={icon}></i></div>
            <h3>{title}</h3>
            <p>{description}</p>
            {label && <strong>{label}</strong>}
        </div>
    );
};

export default ActionCard;