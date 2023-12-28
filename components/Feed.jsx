"use client";

const Feed = () => {


  return (
    <section className="feed">
      <form className=" form">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          required
          className="search_input peer"
        />
      </form>
    </section>
  );
};

export default Feed;
