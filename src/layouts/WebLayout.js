import Header from "@/components/Header";
import Head from "next/head";

const WebLayout = ({ title, children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      {children}
    </main>
  );
};

export default WebLayout;
