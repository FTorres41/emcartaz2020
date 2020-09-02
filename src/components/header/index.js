import React, { useEffect, useState } from "react";
import api from "../../services/baseApi";
import { HeaderBar, HeaderTab } from "./styled";
import Logo from "../logo";
import { Tabs } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';

const Header = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("/categories?per_page=30");
      setCategorias(data);
    }

    loadCategorias();
  }, []);

  return (
    <HeaderBar>
      <Row style={{ width: '100%' }}>
        <Col lg={2} xs={12} >
          <Logo />
        </Col>
        <Col lg={10}/>
      </Row>
      <Row>
        <Col lg={12}>
          <Tabs>
            {categorias &&
              categorias.map((categoria) => 
                <HeaderTab key={categoria.id} label={categoria.name}/>
              )}
          </Tabs>
        </Col>
      </Row>
    </HeaderBar>
  );
};

export default Header;
