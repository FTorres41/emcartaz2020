import styled from "styled-components";
import { Row } from "react-flexbox-grid";
import { Menu, Popover, Tab, Toolbar } from "@material-ui/core";

export const HeaderBar = styled(Toolbar)`
  background-color: ${(props) => props.theme.white};
  flex-flow: column nowrap;

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1140px;
    height: 190px;
  }
`;

export const HeaderTab = styled(Tab)`
  color: ${(props) => props.theme.white} !important;
  font-weight: bold !important;
  width: auto !important;
  font-size: 12px !important;
  max-width: 150px !important;
  min-width: 1px !important;
`;

export const TabsRow = styled(Row)`
  background-color: ${(props) => (props.cor ? props.cor : props.theme.blue)};
  flex-wrap: nowrap;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  .MuiTabs-root {
    max-width: 1140px;
    margin: 0 auto;
  }

  .MuiTabs-flexContainer {
    display: flex;
    justify-content: space-between;
  }

  .MuiTab-root {
    letter-spacing: normal !important;
    padding: 6px 9px !important;
  }

  .mobile-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const MobileMenu = styled(Menu)`
  text-transform: uppercase;
  font-weight: 700;

  .MuiPaper-root {
    width: 100%;
    color: ${(props) =>
      props.cor === props.theme.yellow ? props.theme.black : props.theme.white};
    background-color: ${(props) => (props.cor ? props.cor : props.theme.blue)};
  }
`;

export const SearchPopover = styled(Popover)`
  .search {
    background-color: ${(props) => (props.cor ? props.cor : props.theme.blue)};
    padding: 6px 10px;

    button {
      color: #fff;
      font-weight: 600;
      font-size: 11px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 5px;
  margin-right: 10px;
`

export const AdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 80%;
`