import NewTempLayout from "@/layouts/NewTempLayout";
import React from "react";

const Page = () => {
  return <div>index</div>;
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <NewTempLayout>{page}</NewTempLayout>;
};
