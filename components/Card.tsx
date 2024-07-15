import Link from 'next/link';
import Image from 'next/image';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            width={300}
            height={500}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            alt={result.title || 'Movie Image'}
          />

        <div className='p-2'>
        <p className='line-clamp-2'>{result.overview}</p>
        <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
        <p>{result.release_date || result.first_air_date}</p>
        </div>
      </Link>
    </div>
  );
}

