import CardMovie from "./CardMovie";
import CardSeries from "./CardSeries";

export default function ListProduction({ children, productions, type }) {
  return (
    <>
      <section>
        <div className="row d-flex">
          {children}
          {productions.map((production) =>
            type === "movie" ? (
              <CardMovie production={production} key={production.id} />
            ) : (
              <CardSeries production={production} key={production.id} />
            )
          )}
        </div>
      </section>
    </>
  );
}
