// import { Rubik, Commissioner, Inter } from 'next/font/google';
import localFont from "next/font/local";


export const titleFont = localFont({
  src: [
    {
      path: "../public/fonts/Commissioner-Thin.woff2",
      weight: "100",
    },
    {
      path: "../public/fonts/Commissioner-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Commissioner-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Commissioner-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/Commissioner-Black.woff2",
      weight: "900",
    },
    {
      path: "../public/fonts/Commissioner-Bold.woff2",
      weight: "700",
    },

    {
      path: "../public/fonts/Commissioner-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-commissioner",
});
export const textFont = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Thin.woff2",
      weight: "100",
    },
    {
      path: "../public/fonts/Inter-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Inter-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Inter-Medium.woff2",
      weight: "500",
    },

    {
      path: "../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
    },

    {
      path: "../public/fonts/Inter-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Inter-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/Inter-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-inter",
});

// export const titleFont = Commissioner({
//   //   weight: ["500", "600", "700"],
//   subsets: ['latin'],
//   variable: '--font-commissioner',
// });

// export const subTitleFont = Roboto({
// //   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-roboto',
// });

// export const textFont = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// });
