import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();


// CREATE TABLE ClaimsNotificationLogPkgi (SN int(100) PRIMARY KEY AUTO_INCREMENT not null, 
// Ticket_Id varchar(50) not null, Full_Name varchar(100) not null, 
// Location varchar(50) not null, Pol_Num varchar(100) not null, 
// Email varchar(100) not null, Phone varchar(100) not null, IncidentDate varchar(100) not null,
// ElectronicEquipment varchar(4) null, IncidentNature text null, PoliceNotified tinyint(1) null,
// StepsTaken text null, MoneyClaim varchar(4) null, AmountClaimed text null, LogBook text null,
// BankStatement text null, PoliceReport text null, GroupPersonalAccident varchar(4) null, 
// NamAndExtendOfInjury text null, death tinyint(1) null, DeathCertificate text null, 
// Date_Created text not null);