import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import AnimeList from "./components/AnimeList";

function App() {

    const [search, setSearch] = useState("");

    const [animeList, setAnimeList] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function fetchAnime() {

        if (search.trim() === "") {

            alert("Please enter an anime name.");

            return;
        }

        setLoading(true);

        setError("");

const url = `https://kitsu.io/api/edge/anime?filter[text]=${search}&page[limit]=12`;

        try {


const response = await fetch(url);

if (!response.ok) {
    throw new Error("Failed to fetch anime.");
}

const data = await response.json();

setAnimeList(data.data);

        }

        catch (err) {

            setError(err.message);

            setAnimeList([]);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container">

<h1 className="title">🎌 Anime StudioKaCo</h1>

<p className="subtitle">
    Discover your next favourite anime.
</p>

            <SearchBar

                search={search}

                setSearch={setSearch}

                fetchAnime={fetchAnime}

            />

            {

                
loading &&
<div className="loader-container">
    <div className="loader"></div>
    <p>Summoning your anime...</p>
</div>

            }

            {

                error &&

                <h2 className="error">

                    {error}

                </h2>

            }

            {

                !loading &&

                !error &&

                animeList.length === 0 &&

<div className="empty-state">
    <h2>🍥 Search your favourite anime</h2>
    <p>Naruto • One Piece • Death Note • Demon Slayer</p>
</div>

            }

            {

                animeList.length > 0 &&

                <AnimeList

                    animeList={animeList}

                />

            }

        </div>

    );

}

export default App;