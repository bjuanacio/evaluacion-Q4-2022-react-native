import { View } from "react-native"
import { Input } from '../../atoms';

interface CustomInputProps {
    name: string;
    value: any;
    setValue: any;
}

export const CustomInput = ({ name, value, setValue }: CustomInputProps) => {
    return (
        <View>
            <Input
                onChangeText={setValue}
                value={value}
                placeholer={name}
            />
        </View>
    )
}