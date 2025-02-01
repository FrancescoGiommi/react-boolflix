const flagLanguage = (language) => {
  switch (language) {
    case "es":
      return "ES";
    case "pt":
      return "PT";
    case "sv":
      return "SV";
    case "hi":
      return "HI";
    case "it":
      return "IT";
    case "en":
      return "EN";
    default:
      return "EN";
  }
};

export default function CardSeries({ production }) {
  const flags = flagLanguage(production.original_language);

  const posterImage = (poster) => {
    const imgUrl = "https://image.tmdb.org/t/p";
    const imgSize = "/w342";
    return imgUrl + imgSize + poster;
  };

  const voteConverter = (oldScore) => Math.round(oldScore / 2);

  const renderStars = (score) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={i < score ? "fas fa-star" : "far fa-star"}></i>
      );
    }
    return stars;
  };

  const newScore = voteConverter(production.vote_average);
  return (
    <div className="col-4 card-container">
      <div className="image-container">
        <img
          src={posterImage(production.poster_path)}
          alt={`Poster di ${production.name}`}
        />
        <div className="overlay">
          <ul>
            <li>
              <b>Titolo:</b> {production.name}
            </li>
            <li>
              <b>Titolo originale:</b> {production.original_name}
            </li>
            <li>
              <b>Lingua:</b> {production.original_language}
              <img
                src={`https://flagsapi.com/${flags}/shiny/64.png`}
                alt="Bandiera"
              />
            </li>
            <li>
              <b>Punteggio:</b> {renderStars(newScore)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
