'use client'

import { useState } from 'react'

export default function BookingPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl text-center mb-8">Book Your Session with Nuhaa Lens</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-center text-gray-600">
            Booking system coming soon! Check back later.
          </p>
        </div>
      </div>
    </div>
  )
}