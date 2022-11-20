import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from "next/router"
import Link from "next/link";
import "../styles/Home.module.css"
import blogPosts from "../assets/posts.json"
import BlogCard from "../components/BlogCard";

function Home() {
    const { locale, locales, asPath } = useRouter()

    return (
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title="Welcome to my app!" />
          <p className="description">
            Get started by editing <code>pages/index.js this is test</code>
            <div className="container">
              <main className="main">
                <div className="navbar">
                  {locales.map((l, i) => {
                    return (
                      <span
                        key={i}
                        className={l === locale ?  "selected" : ""}
                      >
                        <Link href={asPath} locale={l}>
                          {l}
                        </Link>
                      </span>
                    );
                  })}
                </div>
                <div>
                  <h1>My Multi-Language Blog</h1>
                  <div>
                    {blogPosts.posts
                      .filter((p) => p.locale === locale)
                      .map((blogPost, i) => {
                        return <BlogCard key={i} blogPost={blogPost} />;
                      })}
                  </div>
                </div>
              </main>
            </div>
          </p>
        </main>

        <Footer />
      </div>
    );
}

export default Home

export async function getStaticProps(context) {
    return {
        props: {
            context,
        },
    };
}
