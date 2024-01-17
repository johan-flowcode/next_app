
'use client'
import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function Movie({ movie }) {
  const { id, image, title,original_title_romanised, release_date, running_time } = movie;

  return (
    <Card shadow="sm" isPressable className="max-w-md mx-auto">
      <CardBody className="overflow-visible p-0">
      <Link href={`/movies/${id}`}>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-auto"
          src={image}
        />
        </Link>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <div>
          <b>{title}</b>
          <p className="text-default-500">{original_title_romanised}</p>
        </div>
        <div>
          <p>Release: {release_date}</p>
          <p>Runtime: {running_time} min</p>
        </div>
        
      </CardFooter>
      
    </Card>
  );
}
