'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'


const Dashboard = () => {
  const { data: session, status } = useSession() // Get session status
  const router = useRouter()

  const [form, setForm] = useState({})

  useEffect(() => {
    // Redirect to login page if session is not available
    if (!session && status === 'authenticated') {
      router.push('/login')
    }
  }, [session, status, router])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  // Show loading indicator while session is being fetched
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  // Render the dashboard if session is available
  return (
    <>
      <h1 className="font-bold text-3xl text-center my-10">
        Welcome to Your Dashboard
      </h1>

      <form className="flex flex-col mx-auto max-w-2xl gap-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            defaultValue={form.name ? form.name : ''}
            type="text"
            id="name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            defaultValue={form.email ? form.email : ''}
            type="text"
            id="email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            defaultValue={form.username ? form.username : ''}
            type="text"
            id="username"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="cover"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cover Picture
          </label>
          <input
            defaultValue={form.cover ? form.cover : ''}
            type="text"
            id="cover"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="profile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Picture
          </label>
          <input
            defaultValue={form.profile ? form.profile : ''}
            type="text"
            id="profile"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="stripeId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stripe Id
          </label>
          <input
            defaultValue={form.stripeId ? form.stripeId : ''}
            type="text"
            id="stripeId"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="stripeSecret"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stripe Secret
          </label>
          <input
            defaultValue={form.stripeSecret ? form.stripeSecret : ''}
            type="text"
            id="stripeSecret"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Save
        </button>
      </form>
    </>
  )
}

export default Dashboard
