import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';

const AppWrapper = styled.div `
  background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu/>
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
        videoDescription={""}
        url={dadosIniciais.categorias[0].videos[0].url}/>

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}/>

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}/>

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}/>
    </AppWrapper>
  );
}

export default Home;
