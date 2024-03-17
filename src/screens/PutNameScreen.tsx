import RightIcon from '@/assets/icons/RightIcon';
import HeaderBack from '@/components/HeaderBack';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  styleNameTo,
} from 'eternative';
import {setAuthStore} from '@/store/authStore';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';

const PutNameScreen = ({}: any) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    setAuthStore({
      name,
      isAuth: true,
    });
  };

  return (
    <SafeAreaView styleName="flex-1 items-center justify-between">
      <StatusBar barStyle={'dark-content'} />
      <View>
        <HeaderBack />
        <View styleName="w-auto items-center">
          <Text styleName="text-xl text-zinc-600">Nombre</Text>
          <TextInput
            styleName="mt-4 text-2xl text-zinc-900 py-1"
            placeholder="Ingresa aquí"
            onChangeText={setName}
            value={name}
          />
          <Text styleName="text-sm text-center text-zinc-800 px-12 mt-6">
            Ingresa el nombre que estará asociado a tu cuenta, este nombre será
            usado para identificarte
          </Text>
        </View>
      </View>
      <View styleName="items-center flex px-12 gap-3">
        <Text styleName="text-zinc-800">
          Al continuar aceptas nuestros{' '}
          <Text styleName="font-bold">términos y condiciones</Text>
        </Text>
        <TouchableOpacity
          onPress={handleSubmit}
          styleName="bg-black rounded-full p-2">
          <RightIcon width={30} height={30} style={styleNameTo('text-white')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PutNameScreen;
