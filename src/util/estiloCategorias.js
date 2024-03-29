import React from "react";
import LogoAmarelo from "../assets/logo_emcartaz_amarelo.png";
import LogoAzul from "../assets/logo_emcartaz_azul.png";
import LogoAzulClaro from "../assets/logo_emcartaz_azul_claro.png";
import LogoLaranja from "../assets/logo_emcartaz_laranja.png";
import LogoMarrom from "../assets/logo_emcartaz_marrom.png";
import LogoRosa from "../assets/logo_emcartaz_rosa.png";
import LogoRoxo from "../assets/logo_emcartaz_roxo.png";
import LogoVerde from "../assets/logo_emcartaz_verde.png";
import LogoVerdeClaro from "../assets/logo_emcartaz_verde_claro.png";
import LogoVermelho from "../assets/logo_emcartaz_vermelho.png";
import LogoAmareloMid from "../assets/logo_emcartaz_amarelo_mid.png";
import LogoVermelhoMid from "../assets/logo_emcartaz_vermelho_mid.png";
import LogoVerdeMid from "../assets/logo_emcartaz_verde_mid.png";
import LogoAzulMid from "../assets/logo_emcartaz_azul_mid.png";
import LogoRosaMid from "../assets/logo_emcartaz_rosa_mid.png";
import LogoAzulEscuro from "../assets/logo_emcartaz_azul_escuro.png";

const EstiloCategorias = [
  {
    id: 7,
    nome: "Artes",
    slug: "artes",
    cor: (props) => props.theme.yellow,
    logo: <LogoAmarelo />,
  },
  {
    id: 6,
    nome: "Turismo",
    slug: "turismo",
    cor: (props) => props.theme.lightGreen,
    logo: <LogoVerdeClaro />,
  },
  {
    id: 13,
    nome: "Bares e Baladas",
    slug: "bares-e-baladas",
    cor: (props) => props.theme.purple,
    logo: <LogoRoxo />,
  },
  {
    id: 15,
    nome: "Cinema",
    slug: "cinema",
    cor: (props) => props.theme.lightGreen,
    logo: <LogoVerdeClaro />,
  },
  {
    id: 36005,
    nome: "Colunas",
    slug: "colunas",
    cor: (props) => props.theme.red,
    logo: <LogoVermelho />,
  },
  {
    id: 9,
    nome: "Dança",
    slug: "danca",
    cor: (props) => props.theme.pink,
    logo: <LogoRosa />,
  },
  {
    id: 8,
    nome: "Gastronomia",
    slug: "gastronomia",
    cor: (props) => props.theme.orange,
    logo: <LogoLaranja />,
  },
  {
    id: 12,
    nome: "Infantil",
    slug: "infantil",
    cor: (props) => props.theme.lightBlue,
    logo: <LogoAzulClaro />,
  },
  {
    id: 14,
    nome: "Literatura",
    slug: "literatura",
    cor: (props) => props.theme.green,
    logo: <LogoVerde />,
  },
  {
    id: 10,
    nome: "Música",
    slug: "musica",
    cor: (props) => props.theme.blue,
    logo: <LogoAzul />,
  },
  {
    id: 37,
    nome: "Teatro",
    slug: "teatro",
    cor: (props) => props.theme.red,
    logo: <LogoVermelho />,
  },
  {
    id: 28,
    nome: "Variedades",
    slug: "variedades",
    cor: (props) => props.theme.brown,
    logo: <LogoMarrom />,
  },
  {
    id: 65138,
    nome: "Dicas do Em Cartaz",
    slug: "dicas-do-em-cartaz",
    cor: (props) => props.theme.lightGreen,
    logo: <LogoVerdeClaro />,
  },
  {
    id: 66114,
    nome: "Tem Sereia na Cozinha",
    slug: "tem-sereia-na-cozinha",
    cor: (props) => props.theme.midPink,
    logo: <LogoRosaMid />,
  },
  {
    id: 66110,
    nome: "Maternagem",
    slug: "maternagem",
    cor: (props) => props.theme.midBlue,
    logo: <LogoAzulMid />,
  },
  {
    id: 66113,
    nome: "Minha Playlist",
    slug: "minha-playlist",
    cor: (props) => props.theme.midGreen,
    logo: <LogoVerdeMid />,
  },
  {
    id: 66112,
    nome: "On The Rocks",
    slug: "on-the-rocks",
    cor: (props) => props.theme.midRed,
    logo: <LogoVermelhoMid />,
  },
  {
    id: 66111,
    nome: "Sétima Arte",
    slug: "setima-arte",
    cor: (props) => props.theme.midYellow,
    logo: <LogoAmareloMid />,
  },
  {
    id: 66115,
    nome: "TechGeek",
    slug: "techgeek",
    cor: (props) => props.theme.darkBlue,
    logo: <LogoAzulEscuro />,
  },
  {
    id: 65125,
    nome: "Covid-19",
    slug: "covid-19",
    cor: (props) => props.theme.red,
    logo: <LogoVermelho />,
  },
  {
    id: 398,
    nome: "Festival de Curitiba",
    slug: "festival-de-curitiba",
    cor: (props) => props.theme.blue,
    logo: <LogoAzul />,
  },
  {
    id: 65046,
    nome: "Dia das Mulheres",
    slug: "dia-das-mulheres",
    cor: (props) => props.theme.pink,
    logo: <LogoRosa />,
  },
  {
    id: 5682,
    nome: "Gibicon",
    slug: "gibicon",
    cor: (props) => props.theme.orange,
    logo: <LogoLaranja />,
  },
  {
    id: 546,
    nome: "Lupaluna",
    slug: "lupaluna",
    cor: (props) => props.theme.green,
    logo: <LogoVerde />,
  },
  {
    id: 17022,
    nome: "Oficina de Música de Curitiba",
    slug: "oficinademusica",
    cor: (props) => props.theme.brown,
    logo: <LogoMarrom />,
  },
  {
    id: 65106,
    nome: "St. Patrick's Day",
    slug: "st-patricks-day",
    cor: (props) => props.theme.midGreen,
    logo: <LogoVerdeMid />,
  },
  {
    id: 15963,
    nome: "LABmoda",
    slug: "labmoda",
    cor: (props) => props.theme.yellow,
    logo: <LogoAmarelo />,
  },
  {
    id: 2352,
    nome: "Destaques",
    slug: "destaques",
    cor: (props) => props.theme.blue,
    logo: <LogoAzul />,
  },
  {
    id: 2351,
    nome: "Featured",
    slug: "featured",
    cor: (props) => props.theme.blue,
    logo: <LogoAzul />,
  },
  {
    id: 66681,
    nome: "Geek",
    slug: "geek",
    cor: (props) => props.theme.purple,
    logo: <LogoRoxo />,
  },
  {
    id: 68571,
    nome: "Natal",
    slug: "natal",
    cor: (props) => props.theme.red,
    logo: <LogoVermelho />,
  },
  {
    id: 277,
    nome: "Entrevistas",
    slug: "entrevistas",
    cor: (props) => props.theme.brown,
    logo: <LogoMarrom />,
  },
  {
    id: 0,
    nome: "Promoções",
    slug: "promo",
    cor: (props) => props.theme.yellow,
    logo: <LogoAmarelo />,
  },
  {
    id: 69258,
    nome: "Carnaval",
    slug: "carnaval",
    cor: (props) => props.theme.midPink,
    logo: <LogoRosaMid />,
  },
];

export default EstiloCategorias;
