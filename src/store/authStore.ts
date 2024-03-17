import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isAuth: false,
  name: '',
};

const useAuthStore = create(
  persist(() => initialState, {
    name: 'auth-storage',
    storage: createJSONStorage(() => AsyncStorage),
  }),
);

export const setAuthStore = (data: any) => {
  useAuthStore.setState(() => data);
};

export const actLogout = () => {
  useAuthStore.setState(() => initialState);
};

export default useAuthStore;
