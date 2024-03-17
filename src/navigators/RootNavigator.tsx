import React from 'react';
import useAuthStore from '@/store/authStore';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const isAuth = useAuthStore(state => state.isAuth);
  return isAuth ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
