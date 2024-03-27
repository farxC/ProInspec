import React, { useEffect } from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Text, View } from "react-native";
import { DropdownProps, Dropdown } from "./Dropdown";
import { PopUp } from "./PopUp";





export function ControlledDropdown<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...dropdownProps}: UseControllerProps<FormType> & DropdownProps){
    
   

        
    return(
        <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field, fieldState:{error, invalid}}) => (
            <View>
                <Text style={{color: 'red', marginLeft:'8%'}}>{error?.message}</Text>
                <Dropdown {...dropdownProps} onChange={(field.onChange)} value={field.value}/>
                
             </View>
            )}
        />   
            
    )
}