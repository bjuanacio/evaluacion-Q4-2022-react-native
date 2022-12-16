import React, { useEffect } from 'react'
import { Alert, Image, SafeAreaView, Text, View } from 'react-native';
import { Button, List } from '../../../atoms'
import { PressableButton } from '../../../molecules';
import { giftListStyles } from './gift-list.styles';
import { string } from './gift-list.string';
import { getGifts, removeGift } from '../../../../services/gift-service/gift-service';
import { Gift } from '../../../../utils/interfaces/gift.interface';
import { useGiftContext } from '../../../../context/gift-context/gift-context';
import { commonStyle } from '../../../../utils/theme/common';

export const GiftList = () => {
    const { gifts, setGifts } = useGiftContext();

    useEffect(() => {
        requestGifts();
    }, [])

    const requestGifts = async () => {
        try {
            const gifts = await getGifts()
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

    const onAdd = () => {
        try {

        } catch (err) {

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

    const renderAddButton = () => {
        return (
            <View style={commonStyle.buttonContainerScreen}>
                <Button onPress={onAdd}>
                    {string.add}
                </Button>
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
                    <List items={roster} renderItem={renderItem} />
                </SafeAreaView>

            ) : <Text>{string.noGifts}</Text>}
            {renderAddButton()}
        </View>
    );
};
