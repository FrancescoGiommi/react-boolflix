export default function CardSeries({ production }) {
  const flagLanguage = () => {
    if (production.original_language === "es") return "ES";
    if (production.original_language === "pt") return "PT";
    if (production.original_language === "sv") return "SV";
    if (production.original_language === "hi") return "HI";
    if (production.original_language === "it") return "IT";
    if (production.original_language === "en") return "EN";
  };
  const flags = flagLanguage();

  const posterImage = (poster) => {
    const imgUrl = "https://image.tmdb.org/t/p";
    const imgSize = "/w342";
    return imgUrl + imgSize + poster;
  };

  const voteConverter = (oldScore) => {
    const newScore = Math.round(oldScore / 2);
    return newScore;
  };

  const renderStars = (score) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < score) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  const oldScore = production.vote_average;
  const newScore = voteConverter(oldScore);
  return (
    <>
      <div className="col-4 card-container ">
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
    </>
  );
}
