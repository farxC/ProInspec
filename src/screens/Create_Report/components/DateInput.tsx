import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import styles from "../../../assets/style/style"
import React, {useEffect, useState} from "react"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "react-native-date-picker";
import { formStore } from "../../../state/globalStore";


export type DateProps = {
   
   onChange?: (handleDate: string) => void
}

export const  DateInput: React.FC<DateProps> = ({onChange}) =>{
    const [datePicker, setDatePicker] = React.useState(new Date)
    const [open, setOpen] = useState(false)

    const handleDatePicker = (date: Date) => {
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        return day + "/" + month + "/" + year
    }
    
  

    return(
        <TouchableOpacity style={styles.componentsInput} >
            
            
            <Text style={datestyles.DateInput}> Data: {handleDatePicker(datePicker)} </Text>
            <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                    {/* Componente de uma biblioteca para a implementação de um botão onde o usuário pode escolher a data atual, conforme molde proposto */}
                    <DatePicker
                        locale="pt-BR"
                        modal
                        open={open}
                        date={datePicker}
                        onConfirm={(selectedDate) => {
                            setOpen(false)
                            if (onChange){
                                onChange(handleDatePicker(selectedDate))
                                setDatePicker(selectedDate)
                            }}}
                        onCancel={() => {
                        setOpen(false)
                        }}
                        mode="date"
                        
                    />
                    <Icon name="calendar" size={30} style={{ marginLeft: '89%', color: "#09511D",}} />

                </View>
               
            </TouchableWithoutFeedback>
            
        </TouchableOpacity>
    )
}


export default DateInput

const datestyles = StyleSheet.create({
DateInput: {
    marginTop: '2%',
    color: "#065A1E",
    fontSize: 18,
    fontWeight: '900',
    position: 'absolute',
    alignSelf: 'center',
},})