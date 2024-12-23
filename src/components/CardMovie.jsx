export default function CardProduction({ production }) {
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

  const oldScore = production.vote_average;
  const newScore = voteConverter(oldScore);
  return (
    <>
      <ul key={production.id}>
        <li>
          <b>Immagine: </b>
          {<img src={posterImage(production.poster_path)} />}
        </li>
        <li>
          <b>Titolo: </b>
          {production.title}
        </li>
        <li>
          <b>Titolo originale: </b>
          {production.original_title}
        </li>
        <li>
          <b>Lingua: </b>
          {production.original_language}
          {<img src={`https://flagsapi.com/${flags}/shiny/64.png`} />}
        </li>
        <li>
          <b>Punteggio: </b>
          {newScore}
        </li>
      </ul>
    </>
  );
}
