function AnimeCard({ anime }) {

    const info = anime.attributes;

    return (
        <div className="card">

            <img
                src={info.posterImage?.large}
                alt={info.canonicalTitle}
            />

            <h2>{info.canonicalTitle}</h2>

            <div className="rating">
    ⭐ {info.averageRating || "N/A"}
</div>

<p className="episodes">
    📺 {info.episodeCount || "Unknown"} Episodes
</p>
<p className="synopsis">
    {info.synopsis
        ? info.synopsis.slice(0, 150) + "..."
        : "No Description"}
</p>

        </div>
    );
}

export default AnimeCard;