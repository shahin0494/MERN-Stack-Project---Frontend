import React from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPen, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';

function AdminDashboard() {
  // #bar chart Sample data
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];

  // #pie chart Sample data
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];


  return (
    <>
      <AdminHead />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <div className='md:grid grid-cols-3'>
            <div className="md:px-5">
              <div className='bg-sky-800 p-4 flex items-center text-5xl rounded text-white'>
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center ms-10 md:ms-2'>
                  <h1 className='text-xl'>Total number of Books</h1>
                  <h1 className='text-4xl me-30'>100+</h1>
                </div>
              </div>
            </div>
            <div className="md:px-5">
              <div className='bg-emerald-800 p-4 flex items-center text-5xl rounded text-white'>
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-center ms-10 md:ms-4'>
                  <h1 className='text-xl'>Total number of Users</h1>
                  <h1 className='text-4xl  me-30'>100+</h1>
                </div>
              </div>
            </div>
            <div className="md:px-5">
              <div className='bg-amber-800 p-4 flex items-center text-5xl rounded text-white'>
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center ms-10 md:ms-2'>
                  <h1 className='text-xl'>Total number of Employees</h1>
                  <h1 className='text-4xl  me-38'>100+</h1>
                </div>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className='md:grid grid-cols-2 p-6 my-5'>
            <div className='my-5 md:my-0  w-100 h-80'>
              <h2 className='mb-5 text-3xl text-start  border border-neutral-300 p-2 w-fit rounded-2xl bg-neutral-200 text-neutral-500'>Yearly Profit Data</h2>
              {/* bar chart */}
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart responsive data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="red" />
                  <Bar dataKey="uv" fill="teal" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='my-5 md:my-0 w-100 h-80'>
              <h2 className='mb-5 text-3xl text-start underline text-neutral-500 underline-offset-4'>Monthly Traffic</h2>
              {/* pie chart */}
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="black"
                  />
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="orange"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>

  )
}

export default AdminDashboard