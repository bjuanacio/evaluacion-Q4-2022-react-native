import styled from 'styled-components/native';
import {Colors} from '../../../utils/constants/colors';

export const EmptyStateContainer = styled.View`
  margin: auto;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Separator = styled.View`
  margin-bottom: 36px;
`;

export const ItemContainer = styled.View`
  height: 300px;
  position: relative;
`;

export const IconContainer = styled.TouchableOpacity`
  text-align: right;
  z-index: 9;
`;
