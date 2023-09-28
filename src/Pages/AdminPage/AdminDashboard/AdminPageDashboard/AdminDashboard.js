import React from "react";
import { PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, Cell } from "recharts";

const AdminDashboard = () => {
    const data = [
        { name: "Students", users: 50000 },
        { name: "Teachers", users: 80000 },
        { name: "Admins", users: 20000 },
        { name: "Others", users: 100000 },
    ];

    const pieColors = ["#ECC94B", "#63B3ED", "#F56565", "#68D391"];
    const barColor = "#4A5568";

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="md:flex justify-center md;justify-around items-center">
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="users"
                            isAnimationActive={false}
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>

                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 80,
                            bottom: 5,
                        }}
                        barSize={30}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 20, right: 20 }}
                            tick={{ fontSize: 12, fontWeight: "bold" }}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fontWeight: "bold" }}
                            label={{ value: "Users", position: "insideTopLeft", angle: -90 }}
                        />
                        <Tooltip />
                        <Legend
                            wrapperStyle={{
                                paddingTop: "20px",
                            }}
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="users" fill={barColor} background={{ fill: "#eee" }} />
                    </BarChart>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
