import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SubjectsTable from './SubjectsTable';
import SubjectUpdateResultTable from './SubjectUpdateResultTable';

const ResultAddPage = ({ student }) => {

    const [allSubjectList, setAllSubjectList] = useState([]);
    const [stdSubjectList, setStdSubjectList] = useState([]);
    const [stdUpdateResultList, setStdUpdateResultList] = useState([]);

    useEffect(() => {
        // Fetch student results based on schoolCode, year, and studentId
        fetch(`https://zuss-school-management-system-server-site.vercel.app/api/AddUpdateResultRoutes/${student?.schoolCode}?year=${student?.year}&studentId=${student?.studentId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch student results');
                }
                return response.json();
            })
            .then((data) => {
                // Set the fetched student results in your component's state
                setStdUpdateResultList(data);
                console.log(data, "Update result")
            })
            .catch((error) => {
                console.error('Error fetching student results:', error);
                // Handle errors, such as network issues or server errors
            });
    }, [student?.schoolCode, student?.year, student?.studentId]);
    console.log(stdUpdateResultList, "Update result")

    console.log(stdSubjectList, "subjectList")
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/termSubject/${student?.schoolCode}?year=${new Date().getFullYear()}`);
                setAllSubjectList(response.data);
            } catch (error) {
                console.error('Error fetching payment information:', error);
            }
        };

        fetchPayment();

    }, [student?.schoolCode, student?.email]);


    useEffect(() => {
        // Use a separate effect for setting 'stdPayment' based on 'student' and 'allPayment'
        let filteredPayment = allSubjectList;

        if (student.shift) {
            filteredPayment = allSubjectList.filter(pay => pay.shiftName === student.shift && pay.className === student?.className);
        } else if (student?.section) {
            filteredPayment = allSubjectList.filter(pay => pay.sectionName === student.section && pay.className === student?.className);
        } else {
            filteredPayment = allSubjectList.filter(pay => pay.className === student?.className);
        }

        setStdSubjectList(filteredPayment.length > 0 ? filteredPayment : null); // Set to null if no data found

    }, [student, allSubjectList]);

    return (
        <div>
            <h1 className="text-xl md:text-2xl font-semibold mb-4 text-white my-10">Add Result & Calculation</h1>
            {
                stdUpdateResultList && stdUpdateResultList.length > 0 ?
                    stdUpdateResultList?.map((updateResult, index) => (
                        <SubjectUpdateResultTable
                            key={index}
                            termData={updateResult}
                            student={student}
                        >
                        </SubjectUpdateResultTable>
                    )) :
                    stdSubjectList && stdSubjectList.length > 0 && stdSubjectList.map((termData, index) => (
                        <SubjectsTable
                            key={index}
                            termData={termData}
                            student={student}
                        />
                    ))
            }

        </div>
    );
};

export default ResultAddPage;