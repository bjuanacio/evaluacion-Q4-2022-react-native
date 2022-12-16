import React, { useEffect, useState } from 'react'
import { Alert, Image, SafeAreaView, Text, View } from 'react-native';
import { GiftAdd } from './gift-add/gift-add'
import { List } from '../../../atoms'
import { PressableButton } from '../../../molecules';
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
            const giftsResponse = await getGifts(ID_AUTHOR)
            setGifts(giftsResponse)
        } catch (err) {

        }
    }

    const onRemove = (gift: Gift) => {
        Alert.alert(
            string.remove.title,
            string.remove.message,
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
            const response = await removeGift(gift);
            await requestGifts()
        } catch (err) {
            console.error('error => ', err)
        }
    }

    const onAddGift = async () => {
        try {
            const currentGift: Gift = {
                author_id: ID_AUTHOR,
                url: gift
            }
            await saveGift(currentGift);
            await requestGifts();
            setGift('');
        } catch (err) {
            console.log('.... error saving the gift ... ', err);
        }
    }

    const renderItem = (row: any) => {
        const gift: Gift = row.item;
        return (
            <View style={[giftListStyles.rowContainer]}>
                <View style={giftListStyles.item1}>
                    {/* <Image source={row.url} /> */}
                    <Text>{gift.url}</Text>

                </View>
                <View style={giftListStyles.buttonContainer}>
                    <PressableButton handleClick={() => onRemove(gift)} text={string.remove.title} />
                </View>
            </View>
        )
    }

    return (
        <View style={[
            commonStyle.mainMarginHorizontal,
            commonStyle.containerScreens,
        ]}>
            <GiftAdd gift={gift} giftUrl={string.giftURL} setGift={setGift} onAdd={onAddGift} />
            {gifts?.length > 0 ? (
                <SafeAreaView style={[
                    commonStyle.containerScreens,
                ]}>
                    <List items={gifts} renderItem={renderItem} />
                </SafeAreaView>

            ) : <Text>{string.noGifts}</Text>}

        </View>
    );
};
