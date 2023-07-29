import RootLayout from "@/components/Layouts/RootLayout";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}
