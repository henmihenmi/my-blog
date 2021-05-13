import fetch from "isomorphic-unfetch";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import classes from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";

const Home = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>ブログ名</title>
      </Head>
      <Header />
      <div className={classes.container}>
        <div className={classes.main}>
          <h2>最新の記事</h2>
          {blogs.map((blog) => (
            <React.Fragment key={blog.id}>
              <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                <a>
                  <h2>{blog.title}</h2>
                </a>
              </Link>
              {blog.tags.map((tag) => (
                <React.Fragment key={tag.id}>
                  <span>{tag.name}</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className={classes.aside}>
          <Aside />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(`https://hkentaro.microcms.io/api/v1/blogs/`, key);
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
