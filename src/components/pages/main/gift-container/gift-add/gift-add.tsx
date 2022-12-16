import { Button, View, TextInput } from 'react-native';
import { giftAddStyles } from './gift-add.styles'

interface GiftAddProps {
  onAdd?: () => void;
  giftPlh: string;
  gift: any;
  setGift: any;
}

export const GiftAdd = (props: GiftAddProps) => {
  const { gift, giftPlh, onAdd, setGift } = props;
  return (
    <View style={[giftAddStyles.addRowContainer]}>
      <View style={giftAddStyles.addRowItem1}>
        <TextInput style={giftAddStyles.addTextInput}
          placeholder={giftPlh}
          value={gift}
          onChangeText={setGift} />
      </View>
      <View>
        <Button onPress={onAdd} title="Add" />
      </View>
    </View>
  );
};
