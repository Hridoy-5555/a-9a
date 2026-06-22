import React from 'react';

const BookingModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      {/* Animated Modal Structural Body */}
      <div className="w-full max-w-lg transform rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl transition-all duration-300 ease-out scale-100 motion-safe:animate-fadeInUp">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-5 border-b border-gray-100 dark:border-zinc-800 pb-3">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Confirm Booking</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 transition-transform duration-200 hover:rotate-90"
          >
            ✕
          </button>
        </div>

        {/* Modal Interfacing Content/Form */}
        <div className="space-y-4">
          {children}
        </div>
        
      </div>
    </div>
  );
};

export default BookingModal;