import { Button, View, TouchableOpacity, Text, FlatList, StyleSheet, StyleProp, ViewStyle } from "react-native";
import styles from "../assets/style/style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { FC, useState, useEffect } from 'react';
import { FlatListProps } from "react-native";
import { PopUp } from "./PopUp";


export interface DataItem{
    key: string;
    value: string;
}

export interface DropdownProps{
    DropdownValues: DataItem[]
    icon?: boolean 
    onChange?: (str: string) => void 
    value?: string
    placeholder?: string
    
}

export const Dropdown: React.FC<DropdownProps>= ({
    DropdownValues,
     icon,
     onChange,
     value,
     placeholder
     
    }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<DataItem[]>([]);
    const [selected, setSelected] = useState<string| undefined>(placeholder)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    

    useEffect(() => {
        setData(DropdownValues);
        

    }, [DropdownValues])

    useEffect(() => {
        // Update selected state based on the received value (controlled behavior)
        if (value !== undefined) {
            setSelected(value);
        }
    }, [value]); // Add value as a dependency


    return (
        <TouchableOpacity style={[styles.componentsInput]}>
            <TouchableOpacity style={stylesDrop.dropdownContent} onPress={() => { setOpen(!open); }} >
                <Text style={{ color: "#065A1E", fontSize: 15, minWidth: '80%', marginVertical: '4%', fontWeight: '800',}}>{selected}</Text>
                {open ? (
                    <View style={stylesDrop.View}>
                        <FlatList style={stylesDrop.List} data={data} renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={stylesDrop.dropViewer} onPress={() => {
                                    setSelected(item.value);
                                    setOpen(!open);
                                    if(onChange && selected !== ''){
                                        onChange(item.value)
                                    }
                                    setDropdownVisible(false)

                                }}>
                                    <Text style={stylesDrop.DropDownText}>{item.value}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) =>  item.key}
                        
                        />
                    </View>
                ) : null}

            </TouchableOpacity>
            
            {icon && <Icon name="home-circle-outline" size={30} color={"green"} style={stylesDrop.IconSetor}></Icon>}


        </TouchableOpacity>

    )
}

const stylesDrop = StyleSheet.create({
    
    dropdownContent: {   /* Estilização da àreal geral do dropdown*/
        alignItems: "center",
        justifyContent: "center",
      },
    
    dropViewer: {
        paddingVertical: '15%',
        marginLeft: '20%',
    },

    View: {
        backgroundColor: '#09511D',
        borderRadius: 8,
        paddingRight: '55%',
        bottom: 50,
        position: 'absolute',
        alignItems: 'center',
    },

    DropDownText: {
        fontWeight: '500',
        color: "#f8f8ff",
    },

    IconSetor: {
        alignSelf: "center",
        paddingRight: 40,
    },
    List:{
        zIndex: 4
    }
})
