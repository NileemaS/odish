import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
  const title = "Welcome to Nextjs";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>

          <NavItem className="ms-auto">
            <Link href="/login">
              <a className="nav-link">Sign In</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/register">
              <a className="nav-link"> Sign Up</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}