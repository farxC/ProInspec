import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { View, Text } from "react-native";
import DateInput, { DateProps } from "../screens/Create_Report/components/DateInput";





export function ControlledDateInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    }: UseControllerProps<FormType> & DateProps){
    //TODO
        
    return(
        <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field, fieldState: {error}}) => (
            <View>
                <Text style={{color: 'red', marginLeft: '8%'}}>{error?.message}</Text>
                <DateInput onChange={(selectedDate) =>{
                    field.onChange(selectedDate.toString())
                }} />
            </View>
            )}
            
        />   
            
    )
}