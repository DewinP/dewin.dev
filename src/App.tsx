import React from "react";
import { Layout } from "./components/Layout";
import { Home } from "./Home";
import { Portofolio } from "./Portofolio";
import { Contact } from "./Contact";

function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>
      <section id="portofolio">
        <Portofolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;
