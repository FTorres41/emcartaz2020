import React from 'react'
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

const EstiloCategorias = [
    {
        id: 7,
        nome: 'Artes',
        slug: 'artes',
        cor: (props) => props.theme.yellow,
        logo: <LogoAmarelo />,
    },
    {
        id: 13,
        nome: 'Bares e Baladas',
        slug: 'bares-e-baladas',
        cor: (props) => props.theme.purple,
        logo: <LogoRoxo />,
    },
    {
        id: 15,
        nome: 'Cinema',
        slug: 'cinema',
        cor: (props) => props.theme.lightGreen,
        logo: <LogoVerdeClaro />,
    },
    {
        id: 9,
        nome: 'Dança',
        slug: 'danca',
        cor: (props) => props.theme.pink,
        logo: <LogoRosa />,
    },
    {
        id: 8,
        nome: 'Gastronomia',
        slug: 'gastronomia',
        cor: (props) => props.theme.orange,
        logo: <LogoLaranja />,
    },
    {
        id: 12,
        nome: 'Infantil',
        slug: 'infantil',
        cor: (props) => props.theme.lightBlue,
        logo: <LogoAzulClaro />
    },
    {
        id: 11,
        nome: 'Juvenil',
        slug: 'juvenil',
        cor: (props) => props.theme.yellow,
        logo: <LogoAmarelo />
    },
    {
        id: 14,
        nome: 'Literatura',
        slug: 'literatura',
        cor: (props) => props.theme.green,
        logo: <LogoVerde />
    },
    {
        id: 10,
        nome: 'Música',
        slug: 'musica',
        cor: (props) => props.theme.blue,
        logo: <LogoAzul />
    },
    {
        id: 37,
        nome: 'Teatro',
        slug: 'teatro',
        cor: (props) => props.theme.red,
        logo: <LogoVermelho />
    },
    {
        id: 28,
        nome: 'Variedades',
        slug: 'variedades',
        cor: (props) => props.theme.brown,
        logo: <LogoMarrom />
    },
    {
        id: 65138,
        nome: 'Dicas do Em Cartaz',
        slug: 'dicas-do-em-cartaz',
        cor: (props) => props.theme.lightGreen,
        logo: <LogoVerdeClaro />
    },
    
];

export default EstiloCategorias;