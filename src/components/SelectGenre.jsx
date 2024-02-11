import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchMoviesByGenre } from '../redux/reducer/movieReducer';

export default function SelectGenre({genres, type}) {
  const dispatch = useDispatch();
  return (
    <Select onChange={
        (e)=> dispatch(fetchMoviesByGenre({genre: e.target.value, type}))
        }>
        {genres.map((genre)=>{
            return (
                <option value={genre.id}>{genre.name}</option>
            )
        })}
    </Select>
  )
}

const Select = styled.select`
    margin-left: 50px;
    display: flex;
    cursor: pointer;
    font-size: 1.4rem;
    background-color: rgba(0,0,0,0.4); 
    color: white;
    padding: 0.3rem;
    border-radius: 4px;
`;