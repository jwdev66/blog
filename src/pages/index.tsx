import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/addOns/Layout";
import { Landing } from "../components/landing/Landing";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Blogistan | Home</title>
      </Helmet>
      <div>
        <Layout>
          <Landing />
        </Layout>
      </div>
    </div>
  );
}
