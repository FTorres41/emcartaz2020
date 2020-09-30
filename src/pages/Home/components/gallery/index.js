import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../../../services/baseApi";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { GalleryContainer } from './styled';
import GetImage from '../../../../util/getImage';
import EstiloCategorias from "../../../../util/estiloCategorias";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = () => {
    const [destaques, setDestaques] = useState([]);
    const history = useHistory();
    const categorias = EstiloCategorias;

    useEffect(() => {
        async function BuildDestaques (data) {
            let destaques = [];
    
            for (let i = 0; i < data.length; i++) {
                const dt = data[i];
                const url = await GetImage(dt);
    
                destaques.push({
                    id: dt.id,
                    imagem: url,
                    titulo: dt.title.rendered.replace('&#8211;', '-'),
                    link: dt.link,
                    slug: dt.slug,
                    categoria: categorias.filter(x => dt.categories.includes(x.id))[0],
                })
            }  

            return destaques;
        }

        async function loadDestaques() {
            const { data } = await api.get("/posts?per_page=3&categories=2352");
            const destaques = await BuildDestaques(data);
            setDestaques(destaques);
        }

        loadDestaques();
    }, [categorias]);

    return (
        <GalleryContainer>
            <AutoplaySlider 
                play={true}
                cancelOnInteraction={false}
                interval={5000}
                animation="foldOutAnimation"
                cssModule={[CoreStyles, AnimationStyles]}
            >
                {destaques && 
                    destaques.length > 0 && 
                    destaques.map((destaque) => (
                        <div className="destaque-item" key={destaque.id} onClick={() => history.push(`/${destaque.categoria.slug}/${destaque.slug}`)}>
                            <img src={destaque.imagem} alt={destaque.titulo}/>
                            <div className="destaque-link" onClick={() => history.push(`/${destaque.categoria.slug}/${destaque.slug}`)}>
                                <div>{destaque.titulo}</div>
                            </div>
                        </div>
                    ))}
            </AutoplaySlider>
        </GalleryContainer>
    )
}

export default Gallery;