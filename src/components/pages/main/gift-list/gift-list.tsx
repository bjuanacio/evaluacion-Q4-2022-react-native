import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, SafeAreaView, Text, View } from 'react-native';
import { List } from '../../../atoms'
import { CustomInput, PressableButton } from '../../../molecules';
import { giftListStyles } from './gift-list.styles';
import { string } from './gift-list.string';
import { getGifts, removeGift, saveGift } from '../../../../services/gift-service/gift-service';
import { Gift } from '../../../../utils/interfaces/gift.interface';
import { useGiftContext } from '../../../../context/gift-context/gift-context';
import { commonStyle } from '../../../../utils/theme/common';
import { ID_AUTHOR } from '../../../../utils/constants/urls';

export const GiftList = () => {
    const { gifts, setGifts } = useGiftContext();
    const [gift, setGift] = useState('');

    useEffect(() => {
        requestGifts();
    }, [])

    const requestGifts = async () => {
        try {
            const gifts = await getGifts(ID_AUTHOR)
            console.log('current gifts .... ', gifts);
            setGifts(gifts)
        } catch (err) {

        }
    }

    const onRemove = (gift: Gift) => {
        Alert.alert(
            string.remove.title,
            [
                {
                    text: string.remove.cancel,
                },
                { text: string.remove.ok, onPress: () => handleRemove(gift) }
            ]
        );
    }

    const handleRemove = async (gift: Gift) => {
        try {
            await removeGift(gift.id);
            await requestGifts()
        } catch (err) {
            console.error('error => ', err)
        }
    }

    const onAdd = async () => {
        const currentGift: Gift = {
            author_id: ID_AUTHOR,
            url: gift
        }
        try {
            const response = await saveGift(currentGift);
            console.log('response .... ', response);
            await requestGifts();

        } catch (err) {
            console.log('.... error saving the gift ... ', err);
        }
    }

    const renderItem = (row: any) => {
        return (
            <View style={[giftListStyles.rowContainer]}>
                <View style={giftListStyles.item1}>
                    {/* <Image source={row.url} /> */}
                    {row.url}
                </View>
                <View style={giftListStyles.buttonContainer}>
                    <PressableButton handleClick={() => onRemove(row.item)} text={string.remove.title} />
                </View>
            </View>
        )
    }

    const handleChangeText = (e) => {
        console.log('eeee => ', e);
        setGift(e);
    }

    const renderAddButton = () => {
        return (
            <View style={commonStyle.buttonContainerScreen}>
                <CustomInput name={string.giftURL} value={gift} setValue={setGift} />
                <Button onPress={onAdd}
                    title={string.add}></Button>
                {/* <Button onPress={onAdd}>
                    {string.add}
                </Button> */}
            </View>
        )
    }

    return (
        <View style={[
            commonStyle.mainMarginHorizontal,
            commonStyle.containerScreens,
        ]}>
            {gifts?.length > 0 ? (
                <SafeAreaView style={[
                    commonStyle.containerScreens,
                ]}>
                    <List items={gifts} renderItem={renderItem} />
                </SafeAreaView>

            ) : <Text>{string.noGifts}</Text>}
            {renderAddButton()}
        </View>
    );
};
