import React, { useEffect, useState } from 'react';
import api from "../../../../services/baseApi";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { GalleryContainer } from './styled';
import GetImage from '../../../../util/getImage';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = () => {
    const [destaques, setDestaques] = useState([]);

    useEffect(() => {
        async function BuildDestaques (data) {
            let destaques = [];
    
            for (let i = 0; i < data.length; i++) {
                const dt = data[i];
                const url = await GetImage(dt);
    
                destaques.push({
                    id: dt.id,
                    imagem: url,
                    titulo: dt.title.rendered,
                    link: dt.link
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
    }, []);

    return (
        <GalleryContainer>
            <AutoplaySlider 
                play={true}
                cancelOnInteraction={false}
                interval={10000}
                animation="foldOutAnimation"
                cssModule={[CoreStyles, AnimationStyles]}
            >
                {destaques && 
                    destaques.length > 0 && 
                    destaques.map((destaque) => (
                        <div className="destaque-item" key={destaque.id}>
                            <img src={destaque.imagem} alt={destaque.titulo}/>
                            <div className="destaque-link">
                                <a href={destaque.link}>{destaque.titulo}</a>
                            </div>
                        </div>
                    ))}
            </AutoplaySlider>
        </GalleryContainer>
    )
}

export default Gallery;