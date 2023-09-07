import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head"; // Import the Head component

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://youthumb-nine.vercel.app"
        openGraph={{
          url: "https://youthumb-nine.vercel.app",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Head>
        {/* Place your script tag inside the Head component */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6949411170952048"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
