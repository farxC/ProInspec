import AsyncStorage from "@react-native-async-storage/async-storage"

export const clearAllItems = () => {
    AsyncStorage.clear()
  }