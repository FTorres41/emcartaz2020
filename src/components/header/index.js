import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/baseApi";
import { HeaderBar, HeaderTab, MobileMenu, TabsRow } from "./styled";
import Logo from "../logo";
import { Button, MenuItem, Tabs } from "@material-ui/core";
import { Row, Col } from "react-flexbox-grid";
import { isMobile } from "react-device-detect";
import { ImMenu } from "react-icons/im";

const Header = ({ cor }) => {
  const history = useHistory();
  const { categoria } = useParams();
  const [categorias, setCategorias] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  function GetLogo() {
    if (categoria) {
      switch (categoria) {
        case "artes":
          return "emcartaz-amarelo";
        case "bares-e-baladas":
          return "emcartaz-roxo";
        case "cinema":
        case "dicas-do-em-cartaz":
          return "emcartaz-verde-claro";
        case "danca":
          return "emcartaz-rosa";
        case "gastronomia":
          return "emcartaz-laranja";
        case "infantil":
          return "emcartaz-azul-claro";
        case "juvenil":
          return "emcartaz-amarelo";
        case "literatura":
          return "emcartaz-verde";
        case "musica":
          return "emcartaz-azul";
        case "colunas":
        case "teatro":
          return "emcartaz-vermelho";
        case "variedades":
          return "emcartaz-marrom";
        default:
          return "emcartaz";
      }
    }
    
    return "emcartaz";
  }

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("/categories?per_page=50");
      setCategorias(data.filter((x) => x.description !== ""));
    }

    loadCategorias();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickMobileMenu = (slug, id) => {
    if (slug !== "colunas") {
      history.push(`/${slug}/${id}/pagina/1`);
    } else {
      history.push(`/${slug}`);
    }
    handleClose();
  };

  const clickMenu = (slug, id) => {
    if (slug !== "colunas") {
      history.push(`/${slug}/${id}/pagina/1`);
    } else {
      history.push(`/${slug}`);
    }
  };

  return (
    <HeaderBar>
      <div className="header-content">
        <Row>
          <Col lg={12}>
            {isMobile ? (
              <center>
                <Button onClick={() => history.push(`/`)}>
                  <Logo className={GetLogo()} />
                </Button>
              </center>
            ) : (
              <Button onClick={() => history.push(`/`)}>
                <Logo className={GetLogo()} />
              </Button>
            )}
          </Col>
        </Row>
        <TabsRow cor={cor ? cor : (props) => props.theme.blue}>
          {isMobile ? (
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <ImMenu color={"white"} size={"3em"} />
              </Button>
              <MobileMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={anchorEl}
                onClose={handleClose}
                cor={cor ? cor : (props) => props.theme.blue}
              >
                {categorias &&
                  categorias.map((categoria) => (
                    <MenuItem
                      key={categoria.id}
                      onClick={() =>
                        clickMobileMenu(categoria.slug, categoria.id)
                      }
                    >
                      {categoria.name}
                    </MenuItem>
                  ))}
              </MobileMenu>
            </div>
          ) : (
            <Col lg={12}>
              <Tabs value={false}>
                {categorias &&
                  categorias.map((categoria) => (
                    <HeaderTab
                      key={categoria.id}
                      label={categoria.name}
                      onClick={() => clickMenu(categoria.slug, categoria.id)}
                    />
                  ))}
              </Tabs>
            </Col>
          )}
        </TabsRow>
      </div>
    </HeaderBar>
  );
};

export default Header;
