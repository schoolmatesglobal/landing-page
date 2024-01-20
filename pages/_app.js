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

const queryClient = new QueryClient();

Router.events.on("routeChangeStart", nProgress.start);

Router.events.on("routeChangeError", nProgress.done);

Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
