import Image from 'next/image'

export default function page() {
  return (
    <main className="home text-xl min-h-[100vh] flex items-center justify-center px-6 sm:pt-0 pt-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-600 opacity-[0.76]"></div>

      <div className="relative text-white text-center">
        <div className="container sm:text-2xl text-xl font-medium">
          <h2 className="sm:text-7xl text-5xl font-semibold sm:mb-16 mb-8 text-center">Rincón Mágico Ghibli</h2>
          <p className="text-left">
          Embárcate en un viaje encantador donde cada película de Ghibli Studio es una joya esperando ser descubierta.
          </p>
         
        </div>
      </div>
    </main>
  )
}
