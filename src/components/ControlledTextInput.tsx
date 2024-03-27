import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import CustomInput, {CustomInputProps} from "./Input";
import { View, Text } from "react-native";
import styles from "../assets/style/style";



export function ControlledTextInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...textInputProps}: UseControllerProps<FormType> & CustomInputProps){
    //TODO
    return(
        <Controller
        control={control}
        rules={rules}
        name={name}
        render={({field, fieldState: {error}}) => (
            <View>
                <Text style={{color: 'red', marginLeft: '8%'}}>{error?.message}</Text>
                <CustomInput {...textInputProps} onChangeText={field.onChange} value={field.value} />
             </View>    
        )}
        />   
            
    )
}