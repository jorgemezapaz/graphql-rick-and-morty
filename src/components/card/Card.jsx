import React from 'react'
import styled from 'styled-components'

const CardItem = styled.div`
  display: grid;
  place-items: center;
  background-color: #eeeeee;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-left: 0px;
  padding-right: 0px;
`

const Image = styled.img`
  border-radius: 15px 15px 0px 0px;
`

const Card = ({ character }) => {
  return (
    <CardItem>
      <Image src={character.image} alt={character.name} />
      <div>
        <p>
          {character.id} - {character.name}
        </p>
      </div>
    </CardItem>
  )
}

export default Card
