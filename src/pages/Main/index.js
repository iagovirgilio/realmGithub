import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';
import getRealm from '~/services/realm';

import { Container, Title, Form, Input, Submit, List } from './styles';

import Repository from '~/components/Repositroy'

const Main = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();
      const data = realm.objects('Repository').sorted('stars', true);

      setRepositories(data);
    }

    loadRepositories();
  }, [])

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handdleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`)

      await saveRepository(response.data);

      setInput('')
      setError(false)
      Keyboard.dismiss();
    } catch (error) {
      setError(true)
    }
  }

  async function handdleRefreshRepository(repository) {
    const response = await api.get(`/repos/${repository.fullName}`)

    const data = await saveRepository(response.data);

    setRepositories(repositories.map(repo => repo.id === data.id ? data : repo))
  }

  async function haddleRemoveRepository(repository) {
    const realm = await getRealm();

    realm.write(() => {
      realm.delete(repository);
    });

    setRepositories(realm.objects('Repository').sorted('stars', true))
  }

  async function haddleEditeRepository(repository, name) {
    navigation.navigate('Repositorio', {repository_id: repository, name});
  }

  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={handdleAddRepository}>
          <Icon name="add" size={22} color="#FFF"/>
        </Submit>
      </Form>

      <List
        KeyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtrator={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} onRefresh={() => handdleRefreshRepository(item)}
           onDelete={() => haddleRemoveRepository(item)}
           onEdite={() => haddleEditeRepository(String(item.id), item.name)}
          />
        )}
      />
    </Container>
  );
}

export default Main;
