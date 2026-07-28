import AnimeCard from "./AnimeCard";

function AnimeList({ animeList }) {

    return (

        <div className="anime-container">

            {

                animeList.map((anime) => (

                    <AnimeCard

                        key={anime.id}

                        anime={anime}

                    />

                ))

            }

        </div>

    );

}

export default AnimeList;