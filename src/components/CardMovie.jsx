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

export default function CardMovie({ production }) {
  const flags = flagLanguage(production.original_language);

  const posterImage = (poster) => {
    const imgUrl = "https://image.tmdb.org/t/p";
    const imgSize = "/w342";
    return imgUrl + imgSize + poster;
  };

  const defaultImg = "src/assets/img/placeolder_img.png";

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
          src={
            production.poster_path
              ? posterImage(production.poster_path)
              : defaultImg
          }
          alt={`Poster di ${production.title}`}
          onError={(e) => (e.target.src = defaultImg)}
        />
        <div className="overlay">
          <ul>
            <li>
              <b>Titolo:</b> {production.title}
            </li>
            <li>
              <b>Titolo originale:</b> {production.original_title}
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
