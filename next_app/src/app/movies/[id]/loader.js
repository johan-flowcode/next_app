


// src/app/movies/[id]/loader.js
export async function loader({ params }) {
    try {
        const res = await fetch(`https://ghibliapi.vercel.app/films/${params.id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch the movie');
        }
        const movie = await res.json();
        return {
            props: { movie }
        };
    } catch (error) {
        console.error(error);
        return { props: { movie: null, error: 'Movie not found' } };
    }
}
