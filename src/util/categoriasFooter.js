import React from 'react';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Categorias = [
    {
        nome: 'Sobre Nós',
        link: '/sobre-nos'
    },
    {
        nome: 'Colunistas',
        link: '/colunistas'
    },
    {
        nome: 'Contato',
        link: '/contato'
    },
    {
        nome: 'YouTube',
        icone: <AiFillYoutube size={22}/>,
        link: 'https://www.youtube.com/channel/UCEiuMdaIdiKhlJe9NFygVUw',
        newWindow: true,
    },
    {
        nome: 'Instagram',
        icone: <AiFillInstagram size={22}/>,
        link: 'http://instagram.com/emcartaz',
        newWindow: true,
    },
    {
        nome: 'Facebook',
        icone: <AiFillFacebook size={22}/>,
        link: 'http://facebook.com/emcartaz.net',
        newWindow: true,
    }
];

export default Categorias;