import AsyncStorage from "@react-native-async-storage/async-storage";
import { Passwords } from './../pages/passwords/index';

const useStorage = () => {
    // Buscar os itens salvos 
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];    
        } catch (error) {
            console.log("Error ao buscar: ", error);
            return [];
        }
    }

    // Salvar os itens
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.log("Error ao salvar: ", error);
        }
    }

    // Remover os itens
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter( (password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;

        } catch (error) {
            console.log("Error ao remover:", error);
        }
    }


    return {
        getItem,
        saveItem,
        removeItem,
    }

}


export default useStorage;