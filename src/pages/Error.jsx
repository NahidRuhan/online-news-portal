import React from 'react'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-4 mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-sm"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default Error
