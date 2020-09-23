import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/baseApi";
import { HeaderBar, HeaderTab, TabsRow } from "./styled";
import Logo from "../logo";
import { Button, Tabs } from "@material-ui/core";
import { Row, Col } from "react-flexbox-grid";

const Header = ({ cor }) => {
  const history = useHistory();
  const { categoria } = useParams();
  const [categorias, setCategorias] = useState([]);

  function GetLogo() {
    if (categoria) {
      switch (categoria) {
        case 'artes':
          return 'emcartaz-amarelo';
        case 'bares-e-baladas':
          return 'emcartaz-roxo';
        case 'cinema':
        case 'dicas-do-em-cartaz':
          return 'emcartaz-verde-claro';
        case 'danca':
          return'emcartaz-rosa';
        case 'gastronomia':
          return 'emcartaz-laranja';
        case 'infantil':
          return 'emcartaz-azul-claro';          
        case 'juvenil':
          return 'emcartaz-amarelo';
        case 'literatura':
          return 'emcartaz-verde';          
        case 'musica':
          return 'emcartaz-azul';
        case 'teatro':
          return 'emcartaz-vermelho';
        case 'variedades':
          return 'emcartaz-marrom';
        default:
          return 'emcartaz';
      }
    }

    return 'emcartaz';
  }

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("/categories?per_page=50");
      setCategorias(data.filter((x) => x.description !== ""));
    }

    loadCategorias();
  }, []);

  return (
    <HeaderBar>
      <div className="header-content">
        <Row>
          <Col lg={12}>
            <Button onClick={() => history.push(`/`)}>
              <Logo className={GetLogo()} />
            </Button>
          </Col>
        </Row>
        <TabsRow cor={cor ? cor : (props) => props.theme.blue}>
          <Col lg={12}>
            <Tabs value={false}>
              {categorias &&
                categorias.map((categoria) => (
                  <HeaderTab
                    key={categoria.id}
                    label={categoria.name}
                    onClick={() =>
                      history.push(`/${categoria.slug}/${categoria.id}/pagina/1`)
                    }
                  />
                ))}
            </Tabs>
          </Col>
        </TabsRow>
      </div>
    </HeaderBar>
  );
};

export default Header;
