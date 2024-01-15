'use client';
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from 'next/link';


export default function MovieDetails({ movie, error }) {

  if (!movie || error) {
    return (
      <main className="text-center sm:pt-32 pt-40">
        <h2 className="sm:text-4xl text-2xl font-medium">{error || 'Movie not found'}</h2>
        <p className="mt-4 sm:text-xl text-base">
          Go back to the
          <Link href="/" className="ml-1 font-semibold underline">
            Home
          </Link>
        </p>
      </main>
    );
  }

  const {
    movie_banner,
    title,
    original_title,
    original_title_romanised,
    release_date,
    rt_score,
    running_time,
    director,
    producer,
    description
  } = movie;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* Título y otros detalles */}
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{original_title}</small>
        <h4 className="font-bold text-large">{original_title_romanised}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* Imagen de la película */}
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={movie_banner}
          width={270}
          height={270}
        />
      </CardBody>

      <div className="px-4">
        <p>Release Date: {release_date}</p>
        <p>Score: {rt_score}</p>
        <p>Runtime: {running_time} mins</p>
        <p>Director: {

          director}</p>
        <p>Producer: {producer}</p>
        <p>{description}</p>
      </div>
    </Card>
  );
}



