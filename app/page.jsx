import Feed from "@components/Feed";

function Home() {
  return (
    <section className="flex w-full justify-center flex-col">
      <h1 className="head_text ">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient ">AI-Powered Prompts</span>
      </h1>
      <p className="desc ">
        Softy Share Prompts is an open-source AI prompting tool for modern world
        to discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}

export default Home;
