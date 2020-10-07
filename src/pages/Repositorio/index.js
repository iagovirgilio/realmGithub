import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import getRealm from '~/services/realm';

import { Form } from '@unform/mobile'

import { Container, Title, Back, Input, Button, ButtonText, List} from './styles';

const Repositorio = ({ route }) => {
  const { repository_id, name } = route.params;

  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [principal, setMain] = useState('');

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();
      const data = realm.objects('Repository').filtered(`id = ${repository_id}`);

      setInput(data[0].name);

      setRepositories(data);
    }

    loadRepositories();

    if (principal != '')
    {
      console.log("Funcionou");
    }
  }, [])

  async function handleEdite (repository) {
    const data = {
      id: repository.id,
      name: `${input}`,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });
  };


  return (
    <Container>
      <Back onPress={() => navigation.navigate('Main')}>
        <Icon name='angle-left' size={30} color='#FFF'/>
      </Back>
      <Title>Repositório - {name}</Title>

      <List
        KeyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtrator={item => String(item.id)}
        renderItem={({ item }) => (
          <>
            <Form>
              <Input
                name="name"
                placeholder="Tilte"
                onChangeText={setInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={input}
              />
              <Button
                onPress={handleEdite(item)}
              >
                <ButtonText>ATUALIZAR</ButtonText>
              </Button>
            </Form>
          </>
        )}
      />

    </Container>
  );
}

export default Repositorio;
