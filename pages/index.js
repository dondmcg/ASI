import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import {Button} from "@mui/material";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Astrological Search Initiative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Astrological Search Initiative" />
        <hr />
        <p className="description">
          This page is yet to be designed so stand by to get your socks blown off!!
        </p>
        <Button style={{maxWidth: '240px', maxHeight: '30px', minWidth: '240px', minHeight: '30px'}} variant="contained" onClick={() => {
          alert('clicked booyah');
        }}>Add your wallet</Button>
      </main>
      <Footer />
    </div>
  );
}
