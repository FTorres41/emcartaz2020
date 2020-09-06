import styled from 'styled-components';

export const GalleryContainer = styled.div`
    .awssld__wrapper {
        height: 600px;
        max-width: 1280px;
        margin: 0 auto;
    }
    
    .awssld__content {
        background-color: ${(props) => props.theme.white} !important;

        .destaque-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            
            img {
                max-width: 1280px;
            }

            .destaque-link {
                background-color: black;
                width: 100%;
                opacity: 0.8;
                top: 520px;
                position: absolute;
                height: 90px;
                
                a {
                    font-size: 36px;
                    display: flex;
                    color: ${(props) => props.theme.white};
                    text-decoration: none;
                    margin: 20px;
                }
            }
        }
    }

    .awssld__bullets button {
        width: 10px !important;
        height: 10px !important; 
    }
`;
