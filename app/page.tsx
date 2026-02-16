import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl font-light mb-6">Nuhaa Lens</h1>
        <p className="text-2xl mb-10">Capturing Moments, Creating Memories</p>
        <div className="space-x-4">
          <Link 
            href="/book" 
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition inline-block"
          >
            Book a Session
          </Link>
          <Link 
            href="/portfolio" 
            className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition inline-block"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}