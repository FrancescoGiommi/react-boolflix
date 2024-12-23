import CardMovie from "./CardMovie";
import CardSeries from "./CardSeries";

export default function ListProduction({ children, Production }) {
  return (
    <>
      <section>
        {children}
        {Production.map(
          (production) => (
            (<CardMovie production={production} key={production.id} />),
            (<CardSeries production={production} key={production.id} />)
          )
        )}
      </section>
    </>
  );
}
