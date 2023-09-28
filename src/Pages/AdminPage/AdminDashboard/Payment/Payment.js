import React, { useState } from 'react';
import PaymentSystem from '../../../../Pages/TeachersPage/TeacherDashboard/PaymentCollection'; // Import your PaymentSystem component
import PaymentRequest from './PaymentRequest'; // Import your PaymentRequest component

function Payment() {
    const [showPaymentSystem, setShowPaymentSystem] = useState(true);
    const [showPaymentRequest, setShowPaymentRequest] = useState(false);

    const handlePaymentSystemClick = () => {
        setShowPaymentSystem(true);
        setShowPaymentRequest(false);
    };

    const handlePaymentRequestClick = () => {
        setShowPaymentSystem(false);
        setShowPaymentRequest(true);
    };

    return (
        <div>
            <nav className="bg-gray-300 p-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black">
                <button
                    className={`px-4 text-white font-semibold mt-5 rounded-l-full py-2 border rounded ${showPaymentSystem ? 'bg-green-400' : ''}`}
                    onClick={handlePaymentSystemClick}
                >
                    Payment System
                </button>
                <button
                    className={`px-4 text-white font-semibold rounded-r-full py-2 border rounded ${showPaymentRequest ? 'bg-green-400' : ''}`}
                    onClick={handlePaymentRequestClick}
                >
                    Payment Request
                </button>
            </nav>

            {showPaymentSystem && <PaymentSystem />}
            {showPaymentRequest && <PaymentRequest />}
        </div>
    );
}

export default Payment;
