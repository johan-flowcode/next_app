'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './img/totorologo.png';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <div className="flex items-center cursor-pointer">
                    <Image src={Logo} width={75} height={75} alt="Logo" />
                    <h2 className="text-white font-semibold text-xl capitalize ml-2">Ghibli</h2>
                  </div>
                </Link>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/">
                    <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</span>
                  </Link>
                  <Link href="/movies">
                    <span className="text-gray-800
                    hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Movies
                    </span>
                  </Link>
                  {/* Puedes agregar más enlaces aquí */}
                </div>
              </div>
            </div>
          </div>

          {/* Panel para el menú de hamburguesa en modo móvil */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <span className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</span>
              </Link>
              <Link href="/movies">
                <span className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Movies</span>
              </Link>
              {/* Puedes agregar más enlaces aquí */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  );
}
