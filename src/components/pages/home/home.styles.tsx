import styled from 'styled-components/native';
import {Colors} from '../../../utils/constants/colors';

export const HomeContainer = styled.View`
  background-color: ${Colors.black};
  padding: 24px;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.white};
  text-align: center;
  margin-bottom: 24px;
`;
