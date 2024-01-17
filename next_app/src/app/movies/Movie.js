
'use client'
import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function Movie({ movie }) {
  const { id, image, title,original_title_romanised, release_date,  } = movie;

  return (
    <Card shadow="sm" isPressable className="movie-card">
      <CardBody className="overflow-visible p-0">
      <Link href={`/movies/${id}`}>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="movie-image w-full object-cover h-auto"
          src={image}
        />
        </Link>
      </CardBody>
      <CardFooter className="text-small justify-between bg-gray-300 p-5">
        <div>
          <b>{title}</b>
          <p className="text-default-500">{original_title_romanised}</p>
        </div>
        <div>
          <p>{release_date}</p>
        </div>
        
      </CardFooter>
      
    </Card>
  );
}
