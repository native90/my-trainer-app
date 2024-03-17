import React from 'react';
import {Text, TouchableOpacity, View} from 'eternative';
import {StatusBar} from 'react-native';
import Avatar from '@/components/Avatar';
import ProfileIcon from '@/assets/icons/ProfileIcon';
import OptionMenu from '@/components/OptionMenu';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import HeartIcon from '@/assets/icons/HeartIcon';
import useAuthStore, {actLogout} from '@/store/authStore';

const ProfileScreen = () => {
  const name = useAuthStore(state => state.name);
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <View styleName="bg-slate-900 px-4 gap-5 pb-5 ios:pt-16">
        <View styleName="flex items-center gap-4">
          <Avatar name={name} />
          <Text styleName="text-zinc-200 font-bold text-2xl">{name}</Text>
        </View>
        <TouchableOpacity styleName="bg-slate-800 rounded-xl border border-slate-600 p-3">
          <Text styleName="text-white font-bold text-lg">No active Plan</Text>
        </TouchableOpacity>
      </View>

      <OptionMenu name="Mi perfil" icon={ProfileIcon} />
      <OptionMenu name="Resumen de salud" icon={HeartIcon} />
      <OptionMenu
        name="Cerrar sesión"
        icon={LogoutIcon}
        rightShow={false}
        onPress={actLogout}
      />
    </View>
  );
};

export default ProfileScreen;
