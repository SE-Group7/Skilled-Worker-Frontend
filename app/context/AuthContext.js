import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../config/config';


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    const login = (phone_number, password) => {
        axios
            .post(`${BASE_URL}/token/`, {
                phone_number,
                password,
            })
            .then(res => {
                let data = res.data;
                console.log(data);
                setUserInfo(data);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            })
            .catch(e => {
                console.log(`login error ${e}`);
            });
    }



    const register = (fullname, password, role, gender, age, phoneNumber, location, occupation) => {
        axios
            .post(`${BASE_URL}/client-register/`, {
                full_name: fullname,
                password, role, age, phoneNumber, location, occupation, gender
            }).then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                console.log(userInfo);
            }).catch(e => {
                console.log(`register error ${e}`);
            }) 
    };

    return (
        <AuthContext.Provider value={{
            userInfo,
            register,
            login
        }} >
            {children}
        </AuthContext.Provider>
    )
};