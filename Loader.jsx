import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; 

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://your-api.com/appointments')
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">lodding.....</h1>
    </div>
  );
};

export default AppointmentsPage;