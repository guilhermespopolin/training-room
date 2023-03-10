import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import VisuallyHidden from "../VisuallyHidden";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
              <VisuallyHidden>Search</VisuallyHidden>
            </button>
            <button>
              <Menu size={24} />
              <VisuallyHidden>Menu</VisuallyHidden>
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
              <VisuallyHidden>My Account</VisuallyHidden>
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
            <VisuallyHidden>Search</VisuallyHidden>
          </button>
          <button>
            <Menu size={24} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </button>
        </DesktopActionGroup>

        <Logo />

        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubscribeLink href="#">Already a subscriber?</SubscribeLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 32px 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-block: 48px 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
    align-items: center;
    margin-block: 16px 72px;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    position: relative;
  }
`;

const SubscribeLink = styled.a`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  text-align: center;
  text-decoration: underline;
  font-size: calc(14rem / 16);
  font-style: italic;
  color: var(--color-gray-900);
`;

export default Header;
