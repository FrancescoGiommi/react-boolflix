export default function CardProduction({ production }) {
  const flagLanguage = () => {
    if (production.original_language === "es") return "ES";
    if (production.original_language === "pt") return "PT";
    if (production.original_language === "sv") return "SV";
    if (production.original_language === "hi") return "HI";
    if (production.original_language === "it") return "IT";
    if (production.original_language === "en") return "EN";
  };

  return (
    <>
      <ul key={production.id}>
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
          {<img src={`https://flagsapi.com/${flagLanguage()}/shiny/64.png`} />}
        </li>
        <li>
          <b>Punteggio: </b>
          {production.vote_average}
        </li>
      </ul>
    </>
  );
}
