import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import img from "../../../../Assets/Images/School.jpg"
import { AuthContext } from '../../../../context/UserContext';

const AllStaffInfo = () => {
    const [staffs, setStaffs] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const { currentSchoolCode } = useContext(AuthContext);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch(`https://zuss-school-management-system-server-site.vercel.app/api/staffs/${currentSchoolCode}`);
                if (response.ok) {
                    const staffsData = await response.json();
                    setStaffs(staffsData);
                } else {
                    throw new Error('Failed to fetch staffs');
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle error case
            }
        };

        fetchNotices();
    }, [currentSchoolCode]);

    const handleOpenModal = (staff) => {
        setSelectedStaff(staff);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedStaff(null);
        setIsModalOpen(false);
    };

    const { register, handleSubmit } = useForm();

    const handleUpdateStaff = async (id, formData) => {
        try {
            const response = await fetch(`https://zuss-school-management-system-server-site.vercel.app/api/staffs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedStaff = await response.json();
                setStaffs((prevStaffs) =>
                    prevStaffs.map((staff) => (staff.id !== updatedStaff._id ? updatedStaff : staff))
                );
                toast.success('Staff Updated Successfully');
                handleCloseModal();
            } else {
                console.error('Failed to update staff');
            }
        } catch (error) {
            console.error('Failed to update staff:', error);
        }
    };

    const handleDeleteStaff = async (staffId) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this staff?');

            if (confirmed) {
                const response = await fetch(`https://zuss-school-management-system-server-site.vercel.app/api/staffs/${staffId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff._id !== staffId));
                    toast.success('Staff Deleted Successfully');
                } else {
                    toast.error('Failed to delete staff');
                }
            }
        } catch (error) {
            toast.error('Failed to delete staff:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredStaffs = staffs.filter((staff) =>
        staff.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
            <h2
                data-aos="fade-down"
                data-aos-duration="2000"
                className="text-3xl text-lime-500 font-bold mb-5"
            >
                Available staffs In your school!!!
            </h2>
            <div className="flex items-center justify-center mb-5">
                <input
                    type="text"
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button
                    className="bg-lime-400 px-3 py-1 rounded-lg"
                    onClick={() => setSearchQuery('')}
                >
                    Clear
                </button>
            </div>

            <div data-aos="flip-up" data-aos-duration="2000" className="overflow-x-auto mb-20 w-11/12 mx-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Staff Name</th>
                            <th>Designation</th>
                            <th>email</th>
                            <th>Phone No</th>
                            <th>Blood Group</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredStaffs.map((staff, index) => (
                            <tr key={staff._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-9 h-9">
                                            {staff.image ? <img src={staff.image} alt="img" /> : <img src={img} alt="img" />}
                                        </div>
                                    </div>
                                </td>
                                <td>{staff.name}</td>
                                <td>{staff.designation}</td>
                                <td>{staff.email}</td>
                                <td>{staff.phone}</td>
                                <td>{staff.bloodGroup}</td>
                                <td onClick={() => handleOpenModal(staff)}><FaEdit /></td>
                                <td onClick={() => handleDeleteStaff(staff._id)}><MdDelete /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal className="mx-auto pt-5 w-3/6 border-2 px-10 mt-40 bg-yellow-100 rounded-lg" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                {selectedStaff && (
                    <div>
                        <h2 className="text-center font-bold text-2xl text-green-500">Edit Staff Information</h2>
                        <form onSubmit={handleSubmit(() => handleUpdateStaff(selectedStaff._id))}>
                            <div>
                                <label className="mr-2" htmlFor="">Staff Name</label>
                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.name}
                                    {...register('name')}
                                    placeholder="Staff Name"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Designation</label>

                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.designation}
                                    {...register('designation')}
                                    placeholder="Designation"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Email</label>

                                <input
                                    type="email"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.email}
                                    {...register('email')}
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Phone</label>

                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.phone}
                                    {...register('phone')}
                                    placeholder="Phone No"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Blood Group</label>

                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.bloodGroup}
                                    {...register('bloodGroup')}
                                    placeholder="Blood Group"
                                />
                            </div>

                            <div className="text-center my-5">
                                <button className="rounded-tl-lg rounded-br-lg bg-lime-400 px-3 py-1 mr-2" type="submit">Update</button>
                                <button className="rounded-tl-lg rounded-br-lg bg-yellow-400 px-3 py-1" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AllStaffInfo;
