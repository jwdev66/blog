import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/addOns/Header";
import Footer from "../components/addOns/Footer";
import Layout from "../components/addOns/Layout";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Blogistan | Home</title>
      </Helmet>
      <div>
        <Layout>Home Page</Layout>
      </div>
    </div>
  );
}
