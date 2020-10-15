import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>HOME</Title>
    </Container>
  );
}

export default Home;
