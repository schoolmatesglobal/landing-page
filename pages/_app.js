import "@/styles/globals.css";
import "@/styles/nprogress.css";
import "react-phone-number-input/style.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import nProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

const queryClient = new QueryClient();

Router.events.on("routeChangeStart", nProgress.start);

Router.events.on("routeChangeError", nProgress.done);

Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favs.png' />

        <script
          src={`https://embed.tawk.to/${process.env.TAWK_PROPERTY_ID}/${process.env.TAWK_WIDGET_ID}`}
          async
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
