import { Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { giftAddStyles } from './gift-add.styles'

interface GiftAddProps {
  onAdd?: () => void;
  giftUrl: string;
  gift: any;
  setGift: any;
}

export const GiftAdd = (props: GiftAddProps) => {
  const { gift, giftUrl, onAdd, setGift } = props;
  return (
    <View style={[giftAddStyles.addRowContainer]}>
      <View style={giftAddStyles.addRowItem1}>
        <TextInput style={giftAddStyles.addTextInput}
          placeholder={giftUrl}
          value={gift}
          onChangeText={setGift} />
      </View>
      <View>
        <Button onPress={onAdd} title="Add" />
      </View>
    </View>
  );
};
