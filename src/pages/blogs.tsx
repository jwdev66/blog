import React from "react";
import { BlogsContent } from "../components/blogs/BlogsContent";
import { BlogPageEmpty } from "../components/blogs/BlogPageEmpty";
import Layout from "../components/addOns/Layout";

export default function Blogs() {
  return (
    <div>
      <Layout>
        <BlogPageEmpty />
      </Layout>
    </div>
  );
}
