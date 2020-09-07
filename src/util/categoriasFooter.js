import React from 'react';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Categorias = [
    {
        nome: 'Home',
        link: '/'
    },
    {
        nome: 'Sobre Nós',
        link: '/'
    },
    {
        nome: 'Contato',
        link: '/'
    },
    {
        nome: 'YouTube',
        icone: <AiFillYoutube size={22}/>,
        link: '/',
    },
    {
        nome: 'Instagram',
        icone: <AiFillInstagram size={22}/>,
        link: '/',
    },
    {
        nome: 'Facebook',
        icone: <AiFillFacebook size={22}/>,
        link: '/',
    }
];

export default Categorias;