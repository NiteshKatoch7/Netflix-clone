import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'

export default function CardSlider({data, title}) {
  return (
    <Container>
      {
        data.map((movie,index) => {
          return <Card movieData={movie} index={index} key={movie.id} />
        })
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`;