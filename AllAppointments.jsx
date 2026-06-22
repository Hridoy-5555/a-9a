// Replace the previous loading ternary layout branch inside AllAppointments.jsx with:
{loading ? (
  <LoadingSpinner message="Retrieving certified clinical schedules from server logs..." />
) : (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {doctors.map(doctor => (
      /* ... Doctor Cards mapped as exactly declared inside file template ... */
    ))}
  </div>
)}