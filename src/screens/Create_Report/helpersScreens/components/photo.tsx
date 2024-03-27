import React, { useState, useEffect, useId } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Platform, PermissionsAndroid, Alert, Pressable, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary, ImageLibraryOptions, launchCamera, CameraOptions } from 'react-native-image-picker';
import { Controller, UseControllerProps, FieldValues  } from 'react-hook-form';
import { formStore } from '../../../../state/globalStore';
import { clearAllItems } from '../../../../asyncStorage/clearItems';
import { PopUp } from '../../../../components/PopUp';



interface PhotoProps {
  title?: string;
  id: number;
  value?: string;
  onChange?: (imageUrl: string) => void; // Function to handle image changes
}

export const PhotoRegister: React.FC<PhotoProps> = ({
  title,
  id,
  onChange,
  value,
}) => {
  // States for image management
  const [selectedImage, setSelectedImage] = useState<string>(''); // Store the selected image URI
  const [addImageView, setaddImageView] = useState(true);
  const [valueIMG, setValueIMG] = useState<string | undefined>()
  const [isPressed, setIsPressed] = useState(false)
  
  useEffect(() => {

    if (value !== undefined){ 
        setValueIMG(selectedImage)
    }
    
  }, [value])
  

  

  const deleteItem = () => {
    setIsPressed(!isPressed)
    AsyncStorage.removeItem(id.toString())
    setaddImageView(true)
  }
  
    // Load saved image from AsyncStorage on component mount
    useEffect(() => {
      const loadImage = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys()
            const imageURI = await AsyncStorage.getItem(id.toString());
          
            if (imageURI) {
            const loadedImages = await JSON.parse(imageURI)
            
            setSelectedImage(loadedImages);
            setaddImageView(false);
          }
          
        } catch (error) {
          console.error('Error loading image from AsyncStorage:', error);
        }
      };
      loadImage();
  
  
    }, []);
  
  
  

         
  // Save the selected image to AsyncStorage
  const saveImage = async (imageURI: string) => {
    try {
      if(imageURI){
        const imgKey = id.toString()
        const imagesJSON = JSON.stringify(imageURI)
        await AsyncStorage.setItem(imgKey, imagesJSON);
       
    
        let keys: readonly string[] = []
        try{
          keys = await AsyncStorage.getAllKeys()     
          const img = await AsyncStorage.getItem(`${imgKey}`) as string
          console.log('Content:', img)
          console.log('All keys: ', keys)
        } catch(e){
          console.error(e)
        }
       
      }
      
    } catch (error) {
      console.error('Error saving image to AsyncStorage:', error);
    }
    
  };
  

  const handleImageSelection = async (uri: string) => {
    if (uri !== undefined) {
      await saveImage(uri);
      formStore.update((state) => {
        state.images?.push(uri)
      })
      onChange?.(uri); // Call the onChange callback with the selected image URI
      setSelectedImage(uri)
      setaddImageView(false)
      
    }
  };

  
    
   const handleCameraLaunch= async () => {
    
    const photoOptions: CameraOptions = {
        mediaType: 'photo',
        saveToPhotos: true,
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: false
    }

    const requestCameraPermission = async () => {

      if (Platform.OS === 'android'){
        try{
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
          )
          return granted === PermissionsAndroid.RESULTS.GRANTED
        } catch (error) {
          console.warn(error)
          return false
        }
      } else return true

    }
    const isCameraPermitted = await requestCameraPermission();
    if(isCameraPermitted){
      await launchCamera(photoOptions, async (response) => {
        if (!response.didCancel && !response.errorMessage && response.assets !== undefined) {
          let imageUri = response.assets?.[0].uri 
          if(imageUri){
            handleImageSelection(imageUri);
          } else {
            console.error('Arquivo selecionado não corresponde a uma imagem')
          }
        } else{
          console.log(response)
        }
      })
    }
    
   }


  

  const imagePicker = () => {
    
    const pickerOptions: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      
      
      
      
    };
    launchImageLibrary(pickerOptions, (response) => {
      if (!response.didCancel && !response.errorMessage && response.assets !== undefined) {
        let uri = response.assets?.[0].uri;
        
        if (uri) {
          handleImageSelection(uri);
          
        } else {
          console.warn('Image selection encountered an error');
        }
      }
    });
  };

  

  return (
    <View style={styles.viewAdd}>
      {addImageView ? (
          <TouchableOpacity style={styles.buttonAdd} onPress={imagePicker}>
          <Icon style={styles.iconAddSty} size={30} name="add-circle-outline" />
          </TouchableOpacity>
      ) : (
        <Image source={{uri: selectedImage}} style={styles.img} />
        
      )}

      <View>
        {title ? <Text style={styles.title}>{title}</Text> : <TextInput placeholder="Adicionar Legenda" onChangeText={() => {}} style={styles.title} />}
        <View style={styles.iconsView}>
        <Pressable onPress={handleCameraLaunch}>
          <Icon size={24}  style={styles.icons} name='camera'></Icon>
        </Pressable>
       <Pressable  onPress={deleteItem}>
         <Icon size={24} style={[styles.icons, {color: isPressed? 'red':'#6e6b6b' }]} name='trash'></Icon>
       </Pressable>
        
      </View>

      </View>
      
    </View>
  );
};

export function ControlledPhotoRegister<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...PhotoRegisterProps
}: UseControllerProps<FormType> & PhotoProps){

    //TODO..
    return(
        <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field, fieldState: {error}}) => (

          <>
                
                <PhotoRegister value={field.value} {...PhotoRegisterProps} onChange={(selectedIMG) => {
                    field.onChange(selectedIMG)
                }} ></PhotoRegister>
          </>
                   
            
        )}
        />
    )
}





const styles = StyleSheet.create({
    viewAdd: {
        borderWidth: 2,
        width: "30%",
        borderRadius: 8,
        margin:"1%",
        paddingBottom:"10%",
        borderColor: '#7DAA8A',
        

    
    },
    container: {
      flex: 1,
    },
    buttonAdd:{
        height: "70%",
        backgroundColor: "#c4c4c4",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:8
    },
    title: {
        alignSelf: 'center',
        textAlign: "justify",
        fontSize: 12,
        fontWeight: "bold",
        paddingVertical: '10%',
        
    },
    iconAddSty: {
        color: "#065A1E",
    },
    img:{
       width: "100%",
       height: "60%",
       padding: "1.5%",
       borderRadius: 8
    },
    iconsView:{
      flexDirection: 'row',
      justifyContent: 'center', 
      paddingBottom: '2%'
    },
    icons:{
      paddingHorizontal: "10%",
      color: '#6e6b6b' 
    }
    

})