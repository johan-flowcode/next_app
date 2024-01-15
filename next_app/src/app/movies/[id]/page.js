
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { notFound } from 'next/navigation';

const getMovie = async id => {
  const res = await fetch('https://ghibliapi.vercel.app/films/<id>' ,+ id, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export default async function MovieDetails({ params }) {
  const { id } = params;

  const movie = await getMovie(id);

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

