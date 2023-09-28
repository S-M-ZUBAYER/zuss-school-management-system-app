import React, { useContext, useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Navbar from '../Shared/Navbar/Navbar';
import BtnSpinner from '../Shared/Spinners/BtnSpinner';
// import { setAuthToken, setAuthTokenGmail } from '../../../Api/Auth/Auth';
// import BtnSpinner from '../../../components/Sprinners/BtnSpinner/BtnSpinner';
// import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const LogIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const { schoolName, setSchoolName, currentSchoolCode, setCurrentSchoolCode } = useContext(AuthContext);
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(false);

    const { signIn, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || `/${schoolName}`;



    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/schoolUser/${email}`)
                    .then(response => {
                        setUserData(response.data); // Store the fetched data in state
                        setSchoolName((response?.data).schoolName)
                        setCurrentSchoolCode((response?.data).schoolCode);
                        localStorage.setItem('schoolUser', JSON.stringify(response.data))
                        setLoading(false);
                        navigate('/');

                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        setLoading(false);
                    });
                toast.success('logIn successfully');

                // setAuthToken(result.user, accountType)

                navigate('/');
            })
            .catch(err => {
                toast.error(err.message);
                console.log(err);
                setLoading(false);
            })

    }




    return (
        <div>
            <Navbar></Navbar>
            <div className='h-screen flex justify-center items-center py-8  drop-shadow-2xl bg-gradient-to-l from-blue-900 via-slate-900 to-black'>
                <div data-aos="zoom-in-down" data-aos-duration="2000" className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
                        <p className='text-sm text-gray-400'>
                            Sign in to access your account
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            {/* <div className="form-control">
                            <div>
                                <label htmlFor='id' className='block mb-2 text-sm text-left'>
                                    School ID
                                </label>
                                <input
                                    onBlur={event => setUserEmail()}
                                    type='digit'
                                    name='Id'
                                    id='School_Id'
                                    value={currentSchoolCode}
                                    readOnly
                                    required
                                    placeholder='Enter school Id'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                        </div> */}
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm text-left'>
                                    Email address
                                </label>
                                <input
                                    onBlur={event => setUserEmail()}
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-red-900 hover:bg-gray-700 hover:text-white text-gray-100 bg-gradient-to-r from-purple-400 to-green-600'
                            >
                                {loading ? <BtnSpinner /> : 'Sign in'}

                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default LogIn
