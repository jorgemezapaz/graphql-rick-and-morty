import React from 'react'
import { gql, useMutation } from '@apollo/client'
import styled from 'styled-components'

const Card = styled.div``
const Image = styled.img`
  border-radius: 15px 15px 0px 0px;
`
const QUERY = gql`
  {
    character(id: $characterId) {
      id
      name
      status
      location {
        id
        name
      }
      image
      gender
      type
      origin {
        id
        name
        type
        dimension
      }
      species
      episode {
        id
        name
        episode
      }
      created
      location {
        id
        name
        type
        dimension
      }
    }
  }
`

const Character = () => {
  const [getCharacter, { loading, error, data }] = useMutation(QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>
  return (
    <Card key={data.character.id}>
      <Image src={data.character.image} alt={data.character.name} />
    </Card>
  )
}

export default Character
