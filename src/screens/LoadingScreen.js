import { Text } from 'react-native'
import React from 'react'
import styled from "styled-components"

export default function LoadingScreen() {
  return (
    <Container>
      <Text>Reps With Friends</Text>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;
`;