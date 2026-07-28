function SearchBar({ search, setSearch, fetchAnime }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAnime();
    };

    return (
        <div className="search-box">

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Search Anime..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit">
                    Search
                </button>

            </form>

        </div>
    );
}

export default SearchBar;