import Image from 'next/image';
import LoadingImage from './components/img/totorologo.png';

export default function loading() {
  return (
    <main className="flex flex-col justify-center items-center h-[40vh] sm:pt-20 pt-40">
      <Image src={LoadingImage} alt='totoro' width={100} height={100} quality={100} className="animate-bounce" />
      <h2 className="text-blue-700 text-2xl mt-4  tracking-wider">Loading...</h2>
    </main>
  );
}