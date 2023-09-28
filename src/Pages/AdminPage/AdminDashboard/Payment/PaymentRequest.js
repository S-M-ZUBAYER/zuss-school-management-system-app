import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../../context/UserContext';
import toast from 'react-hot-toast';

const PaymentRequest = () => {
    const [teacherPayStatus, setTeacherPayStatus] = useState([]);
    const { currentSchoolCode } = useContext(AuthContext);

    const handleAccept = async (id) => {
        const confirmed = window.confirm('Are you sure you want to update the student payment status?');

        if (confirmed) {
            try {
                // Send a PUT request to update the teacher status to false
                await axios.put(`https://zuss-school-management-system-server-site.vercel.app/api/payFees/updateStatus/${id}`);
                // Handle success (e.g., show a success message)
                toast.success('Student payment status updated successfully');
            } catch (error) {
                // Handle error (e.g., show an error message)
                toast.error('Error updating student payment status:', error);
                console.error('Error updating student payment status:', error);
            }
        }
    };


    const handleReject = async (id, selectedPayments) => {
        const confirmed = window.confirm('Are you sure you want to update the student payment status?');

        if (confirmed) {
            try {
                // Send a PUT request to update the teacher status to false
                await axios.put(`https://zuss-school-management-system-server-site.vercel.app/api/payFees/updateRejectStatus/${id}`, {
                    teacherStatus: false,
                    selectedPayments: selectedPayments,
                });



                // Handle success (e.g., show a success message)
                toast.success('Teacher status and payments updated successfully');
            } catch (error) {
                // Handle error (e.g., show an error message)
                console.error('Error updating teacher status and payments:', error);
                toast.error('Error updating teacher status and payments:', error);
            }
        }
    };


    useEffect(() => {
        // Define an asynchronous function to fetch the teacherPayStatus
        const fetchTeacherPayStatus = async () => {
            try {
                // Make the GET request to the API
                const response = await axios.get(
                    `https://zuss-school-management-system-server-site.vercel.app/api/payFees/teacherPayStatus/${currentSchoolCode}`
                );
                console.log(response.data)
                // Update the state with the response data
                setTeacherPayStatus(response.data);
            } catch (error) {
                console.error('Error fetching teacherPayStatus:', error);
            }
        };

        // Call the function to fetch teacherPayStatus
        fetchTeacherPayStatus();
    }, [currentSchoolCode]);
    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black">
            <h2 className="text-white text-3xl font-bold p-4">Teacher Payment Status</h2>
            <table className="text-white border-collapse w-full">
                <thead className="overflow-scroll">
                    <tr>
                        <th className="p-2 border border-white">Name</th>
                        <th className="p-2 border border-white">Student ID</th>
                        <th className="p-2 border border-white">Class Name</th>
                        <th className="p-2 border border-white">Section Name</th>
                        <th className="p-2 border border-white">Class Roll</th>
                        <th className="p-2 border border-white">Proposal Amount</th>
                        <th className="p-2 border border-white">Payment Method</th>
                        <th className="p-2 border border-white">Agent Number</th>
                        <th className="p-2 border border-white">Transaction ID</th>
                        <th className="p-2 border border-white">Paid Amount</th>
                        <th className="p-2 border border-white">Unpaid Amount</th>
                        <th className="p-2 border border-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherPayStatus.map((status) => (
                        <tr key={status._id} className="hover:bg-blue-700">
                            <td className="p-2 border border-white">{status.Name}</td>
                            <td className="p-2 border border-white">{status.studentId}</td>
                            <td className="p-2 border border-white">{status.ClassName}</td>
                            <td className="p-2 border border-white">{status.SectionName}</td>
                            <td className="p-2 border border-white">{status.ClassRoll}</td>
                            <td className="p-2 border border-white">{status.proposalAmount}</td>
                            <td className="p-2 border border-white">{status.paymentMethod}</td>
                            <td className="p-2 border border-white">{status.agentNumber}</td>
                            <td className="p-2 border border-white">{status.transactionId}</td>
                            <td className="p-2 border border-white">{status.PaidAmount}</td>
                            <td className="p-2 border border-white">{status.unpaidAmount}</td>
                            <td className="p-2 border border-white flex items-center">
                                <button onClick={() => handleAccept(status?._id)} className="bg-green-500 text-white px-2 py-3 rounded-md hover:bg-green-600 mr-2">
                                    Accept
                                </button>
                                <button onClick={() => handleReject(status?._id, status?.selectedPayments)} className="bg-red-500 text-white px-2 py-3 rounded-md hover:bg-red-600">
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default PaymentRequest;