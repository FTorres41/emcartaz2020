import React, { useEffect, useState } from "react";
import api from "../../services/baseApi";
import { HeaderBar, HeaderTab, TabsRow } from "./styled";
import Logo from "../logo";
import { Tabs } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';

const Header = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("/categories?per_page=30");
      setCategorias(data.filter(x => x.description !== ""));
    }

    loadCategorias();
  }, []);

  return (
    <HeaderBar>
      <div className="header-content">
        <Row>
          <Col lg={12}>
            <Logo />
          </Col>
        </Row>
        <TabsRow>
          <Col lg={12}>
            <Tabs>
              {categorias &&
                categorias.map((categoria) => 
                <HeaderTab key={categoria.id} label={categoria.name}/>
                )}
            </Tabs>
          </Col>
        </TabsRow>
      </div>
    </HeaderBar>
  );
};

export default Header;
