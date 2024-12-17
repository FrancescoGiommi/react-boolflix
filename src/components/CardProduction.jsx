export default function CardProduction({ production }) {
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
        </li>
        <li>
          <b>Punteggio: </b>
          {production.vote_average}
        </li>
      </ul>
    </>
  );
}
