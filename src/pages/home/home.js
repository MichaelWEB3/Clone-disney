import React from 'react';
import { Text, View, FlatList } from 'react-native'
import * as S from "./style";
import Slid from '../../components/slidOne/Slid';
import Production from '../../components/production/Production';
import Carosel from '../../components/carousel/Carosel';

export default function Home() {

 

  return (
    <S.Body>
      <S.AreaLogo>
        <S.ImgLogo resizeMode="cover" style={{ width: '30%', height: 80 }} source={require('../../assets/img/logo-disneyplus-branca-256.png')}></S.ImgLogo>
      </S.AreaLogo>
      <Slid></Slid>
      <Production></Production>
      <Carosel title="Recomendados para você" list="2"></Carosel>    
      <Carosel title="Novidades no Disney+" list="10"></Carosel>    
      <Carosel title="Continue assitindo" list="4"></Carosel>    
      <Carosel title="Porque você Assistiu: Home de ferro" list="12"></Carosel>    
      <Carosel title="Originais" list="13"></Carosel>    

    </S.Body>
  );
}