
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from './img/totorologo.png'



export default function Footer() {
    return (
        <footer className="bg-blue-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo e imagen en el footer */}
          <div className="flex items-center">
            <Image src={Logo} width={90} height={90} alt="FooterLogo" />
            <span className="text-2xl font-semibold whitespace-nowrap text-white ml-2">Ghibli</span>
          </div>

          {/* Enlaces adicionales */}
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500">
            <li>
              <Link href="#">
                <div className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">About</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Derechos de autor */}
        <div className=" pt-4">
          <p className="text-white text-sm text-center">
            © 2024 Studio Ghibli. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


