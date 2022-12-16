import styled from 'styled-components/native';
import {Colors} from '../../../utils/constants/colors';

interface RowContainerProps {
  haveBottomSpacing?: boolean;
}

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

export const RowContainer = styled.View<RowContainerProps>`
  flex-direction: row;
  align-items: center;
  ${props =>
    props.haveBottomSpacing &&
    `
    margin-bottom: 24px;
  `};
`;

export const InputContainer = styled.View`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.white};
  border-radius: 5;
  width: 250px;
`;

export const AddGifContainer = styled.TouchableOpacity`
  background-color: ${Colors.purple};
  border: 1px solid ${Colors.purple};
  border-radius: 5;
  height: 50px;
  width: 50px;
  margin-left: 16px;
  padding-top: 4px;
  padding-left: 4px;
`;
