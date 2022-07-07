import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import TitleBar from "../components/TitleBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const StyledContainer = styled.div`
    background-image: url("Background.png");
    height: 100vh;
  `;
  return (
    <StyledContainer>
      <Head>
        <title>The PokeGuess Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleBar />
      <MainContainer />
    </StyledContainer>
  );
};

export default Home;
