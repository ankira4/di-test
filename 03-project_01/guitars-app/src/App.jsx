import { Footer, Header, Guitar } from "./components";
import { db } from "./data/db";

export const App = () => {
  console.log(db);
  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {db.map((G) => (
            <Guitar key={G.id} Guitar={G} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
