import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/baseApi";
import { HeaderBar, HeaderTab, TabsRow } from "./styled";
import Logo from "../logo";
import { Button, Tabs } from "@material-ui/core";
import { Row, Col } from "react-flexbox-grid";

const Header = ({ cor }) => {
  const history = useHistory();
  const { catId } = useParams();
  const [categorias, setCategorias] = useState([]);

  function GetLogo() {
    if (catId) {
      switch (parseInt(catId)) {
        case 7:
          return 'emcartaz-amarelo';
        case 13:
          return 'emcartaz-roxo';
        case 15:
          return 'emcartaz-verde-claro';
        case 9:
          return'emcartaz-rosa';
        case 8:
          return 'emcartaz-laranja';
        case 12:
          return 'emcartaz-azul-claro';          
        case 11:
          return 'emcartaz-amarelo';
        case 14:
          return 'emcartaz-verde';          
        case 10:
          return 'emcartaz-azul';
        case 37:
          return 'emcartaz-vermelho';
        case 28:
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
                      history.push(`/categoria/${categoria.id}/pagina/1`)
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
