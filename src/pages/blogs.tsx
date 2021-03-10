import React from "react";
import { BlogsContent } from "../components/blogs/BlogsContent";
import Layout from "../components/addOns/Layout";

export default function Blogs() {
  return (
    <div>
      <Layout>
        <BlogsContent />
      </Layout>
    </div>
  );
}
