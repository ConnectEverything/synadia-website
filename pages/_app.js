import App, { Container } from "next/app"
import Router from "next/router"
import React from "react"
import withGA from "next-ga"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withGA("UA-111730698-1", Router)(MyApp)
