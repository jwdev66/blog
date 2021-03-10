import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/addOns/Layout";

export default function Error() {
  return (
    <div>
      <Helmet>
        <title>Blogistan | 404</title>
      </Helmet>
      <div>
        <Layout>Error Page</Layout>
      </div>
    </div>
  );
}
