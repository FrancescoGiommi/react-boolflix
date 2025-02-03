import CardMovie from "./CardMovie";
import CardSeries from "./CardSeries";

export default function ListProduction({ children, Production }) {
  return (
    <>
      <section>
        <div className="row d-flex">
          {children}
          {Production.map(
            (production) => (
              (<CardMovie production={production} key={production.id} />),
              (<CardSeries production={production} key={production.id} />)
            )
          )}
        </div>
      </section>
    </>
  );
}
