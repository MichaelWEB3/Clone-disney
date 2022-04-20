import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native'
import * as S from "./style";
import axios from 'axios';



export default function Carosel(props) {

  const [movies, setMovies] = useState(null)

  useEffect(() => {
    async function GetMovie() {
      const datemovie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=569be2d532626f50b43b790dac5f0d6f&language=en-US&page=${props.list}`)
      setMovies(datemovie.data.results)
    }
    GetMovie()
  }, [])

  return (
    <S.Body>
      <S.TitleResume>
        {props.title || 'titulo'}
      </S.TitleResume>
      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => {
          return (
            <S.MoviesSlid>
              <S.Imagemovie key={item.id} resizeMode="stretch" source={{ uri: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}` }}></S.Imagemovie>
            </S.MoviesSlid>
          )

        }}
        keyExtractor={(item, index) => index}

      />
    </S.Body>
  );
}