import CardProduction from "./CardProduction";
export default function ListProduction({ children, Production }) {
  return (
    <>
      <section>
        {children}
        {Production.map((production) => (
          <CardProduction production={production} key={production.id} />
        ))}
      </section>
    </>
  );
}
