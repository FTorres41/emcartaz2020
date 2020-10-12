import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/baseApi";
import {
  AdContainer,
  HeaderBar,
  HeaderTab,
  MobileMenu,
  SearchInput,
  SearchPopover,
  TabsRow,
} from "./styled";
import Logo from "../logo";
import { Button, MenuItem, Tabs } from "@material-ui/core";
import { Row, Col } from "react-flexbox-grid";
import { isMobile } from "react-device-detect";
import { ImMenu } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

const Header = ({ cor }) => {
  const history = useHistory();
  const { categoria } = useParams();
  const [categorias, setCategorias] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorSearch, setAnchorSearch] = useState(null);
  const [busca, setBusca] = useState("");
  const open = Boolean(anchorSearch);

  function GetLogo() {
    if (categoria) {
      switch (categoria) {
        case "artes":
          return "emcartaz-amarelo";
        case "bares-e-baladas":
          return "emcartaz-roxo";
        case "cinema":
        case "dicas-do-em-cartaz":
        case "turismo":
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
        case "gostosuras-da-gi":
          return "emcartaz-rosa-mid";
        case "maternagem":
          return "emcartaz-azul-mid";
        case "minha-playlist":
          return "emcartaz-verde-mid";
        case "on-the-rocks":
          return "emcartaz-vermelho-mid";
        case "setima-arte":
          return "emcartaz-amarelo-mid";
        case "techgeek":
          return "emcartaz-azul-escuro";

        default:
          return "emcartaz";
      }
    }

    return "emcartaz";
  }

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("/categories?per_page=50");
      setCategorias(data.filter((x) => x.description !== "" && x.id !== 11));
    }

    loadCategorias();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = (event) => {
    setAnchorSearch(event.currentTarget);
  };

  const handleSearchClose = () => {
    setAnchorSearch(null);
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
        {isMobile ? (
          <Row>
            <Col lg={12}>
              <center>
                <Button onClick={() => history.push(`/`)}>
                  <Logo className={GetLogo()} />
                </Button>
                <AdContainer></AdContainer>
              </center>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={2}>
              <Button onClick={() => history.push(`/`)}>
                <Logo className={GetLogo()} />
              </Button>
            </Col>
            <Col lg={10}>
              <AdContainer></AdContainer>
            </Col>
          </Row>
        )}
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
                <MenuItem>
                  <SearchInput
                    type="text"
                    placeholder="Busca"
                    onChange={(e) => setBusca(e.target.value)}
                  />
                  <Button onClick={() => history.push(`/busca/${busca}`)}>
                    <FaSearch />
                  </Button>
                </MenuItem>
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
                <HeaderTab
                  label={
                    <FaSearch
                      style={{ marginLeft: "10px", justifyContent: "flex-end" }}
                      size={"1.7em"}
                    />
                  }
                  onClick={handleSearchClick}
                />
              </Tabs>
              <SearchPopover
                id={"search"}
                open={open}
                anchorEl={anchorSearch}
                onClose={handleSearchClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                cor={cor ? cor : (props) => props.theme.blue}
              >
                <div className="search">
                  <SearchInput
                    type="text"
                    placeholder="Busca"
                    onChange={(e) => setBusca(e.target.value)}
                  />
                  <Button onClick={() => history.push(`/busca/${busca}`)}>
                    Buscar
                  </Button>
                </div>
              </SearchPopover>
            </Col>
          )}
        </TabsRow>
      </div>
    </HeaderBar>
  );
};

export default Header;
