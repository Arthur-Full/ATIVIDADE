import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import BannerCTA from "@/components/bannerCTA";
import Rodape from "@/components/footer";
import Cabecalho from "@/components/header";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Home() {

  await sleep(3500)

  // throw new Error("Erro simulado!!!");

  return (
    <>

      <Cabecalho/>

      <main>
        <div className="corpo">

          <div className="Text-corpo">
            <h1>Convert More Leads</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, debitis maxime voluptatem, corrupti sunt vel consequuntur ea adipisci sit dignissimos assumenda eum laboriosam minima sapiente consectetur dolore, molestias distinctio esse!</p>
            <button className="btn">Start my Free Trial</button>
          </div>
          


          <div className="img-corpo">
            <img src="/imagens/mulher.png" alt="coisa" />
          </div>

        </div>

      </main>
      
      <BannerCTA/>


      <Rodape/>

    </>
  );
}
