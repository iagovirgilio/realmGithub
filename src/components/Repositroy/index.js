import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText,
  Delete,
  DeleteText,
  Edite,
  EditeText,
  Actions
} from './styles';

const Repositroy = ({ data, onRefresh, onDelete, onEdite }) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

      <Actions>
        <Refresh onPress={onRefresh}>
          <Icon name="refresh" color="#7159C1" size={16} />
          <RefreshText>ATUALIZAR</RefreshText>
        </Refresh>

        <Edite onPress={onEdite}>
          <Icon name="edit" color="#3d3d3d" size={16} />
          <EditeText>EDITAR</EditeText>
        </Edite>

        <Delete onPress={onDelete}>
          <Icon name="trash" color="#ff7272" size={16} />
          <DeleteText>DELETAR</DeleteText>
        </Delete>

      </Actions>

    </Container>
  );
}

export default Repositroy;
