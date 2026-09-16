import "./cabecalho.css";
import Link from "next/link";

export default function header() {
    return (
        <>
        <header>
          <div className="cima">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            <img className="header-logo" src="/imagens/logonoticia.png" alt="logo da empresa" />

            <div className="header-atalhos">
              <Link href={"/"}>Product  </Link>
              <Link href={"/solutions"}>Solutions</Link>
              <Link href={"/solutions/pricing"}>Pricing  </Link>
              {/* <Link href={"/solutions/pricing/learn"}>Learn   </Link>
              <Link href={"/solutions/pricing/learn/contact"}>Contact  </Link> */}
            </div>

            <div className="header-ibtn">
              <img className="header-icon" src="/imagens/lupa.png" alt="" />
              <button className="btn-log-in">Log in</button>
              {/* <button className="free">Start My Free Trial</button> */}
            </div>
          </div>
        </header>
        </>
    )
}