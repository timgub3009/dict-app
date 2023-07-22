import React from "react";
import Search from "./Search";
import DictTable from "./DictTable";

const Dictionary = () => {
  return (
    <section className="dictionary max-w-screen-xl mx-auto py-8 flex flex-col items-center  ">
      <Search />
      <DictTable />
    </section>
  );
};

export default Dictionary;
