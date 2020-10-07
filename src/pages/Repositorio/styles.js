import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#9B49c1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const Back = styled.TouchableOpacity`
  padding: 0 20px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 12px 15px;
  border-radius: 4px;
  margin: 10px;
  font-size: 16px;
  height: 40px;
  color: #333;
  background: #FFF;
  border: 2px solid ${props => props.error ? '#ff7272' : '#FFF'};
`;

export const Button = styled.TouchableOpacity`
  background: #6bd4c1;
  margin: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
  align-items: center;
  height: 40px
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 20px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
