import React, { useEffect, useState } from 'react';
import api from "../../../../services/baseApi";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { GalleryContainer } from './styled';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = () => {
    const [destaques, setDestaques] = useState([]);

    async function GetImage (destaque) {
        const url = destaque._links['wp:attachment'][0].href.split('v2')[1];
        const { data }  = await api.get(url);
        return data[0].guid.rendered;
    }

    

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
            console.log(destaques);
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