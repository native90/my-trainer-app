import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'eternative';
import CardPlan from '@/components/CardPlan';
import SectionTitle from '@/components/SectionTitle';
import CardSupscription from '@/components/CardSupscription';
import CardTrainer from '@/components/CardTrainer';
import HomeHeader from '@/components/HomeHeader';

const HomeScreen = () => {
  const programs = [
    {
      title: 'Principiante',
      img: 'https://storage.hewox.com/wp-content/uploads/2024/03/pexels-photo-7675412.webp',
    },
    {
      title: 'Intermedio',
      img: 'https://storage.hewox.com/wp-content/uploads/2024/03/alora-griffiths-LOnMc8Rp1Qs-unsplash.jpg',
    },
    {
      title: 'Avanzado',
      img: 'https://storage.hewox.com/wp-content/uploads/2024/03/pexels-photo-13236327.webp',
    },
  ];
  return (
    <SafeAreaView styleName="flex-1">
      <HomeHeader />
      <ScrollView>
        <CardSupscription />
        <View styleName="pl-4">
          <SectionTitle>My Trainer Planes</SectionTitle>
          <ScrollView styleName="pb-2" horizontal>
            {programs?.map((program, index) => (
              <CardPlan
                key={`${program.title}${index}`}
                title={program.title}
                source={{uri: program.img}}
              />
            ))}
          </ScrollView>
        </View>
        <View styleName="px-4">
          <TouchableOpacity styleName="w-full p-3 rounded-full bg-red-400 mt-4 items-center">
            <Text styleName="font-bold text-white text-lg">Obtener Ahora</Text>
          </TouchableOpacity>
        </View>

        <View styleName="px-4 pb-3">
          <SectionTitle>Sobre mi</SectionTitle>
          <CardTrainer
            name="Mariana Montalvo"
            source={{
              uri: 'https://storage.hewox.com/wp-content/uploads/2024/03/my-trainer.jpg',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
