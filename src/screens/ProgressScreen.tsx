import CardProgressMsg from '@/components/CardProgressMsg';
import HeroCardImage from '@/components/HeroCardImage';
import SectionTitle from '@/components/SectionTitle';
import {SafeAreaView, ScrollView, Text, View} from 'eternative';
import React from 'react';

const ProgressScreen = () => {
  return (
    <SafeAreaView styleName="flex-1">
      <SectionTitle styleName="ml-4">Progress</SectionTitle>
      <ScrollView styleName="px-4">
        <View styleName="pb-4">
          <HeroCardImage
            styleName="h-80 w-full rounded-xl"
            source={{
              uri: 'https://storage.hewox.com/wp-content/uploads/2024/03/progress-workout.jpg',
            }}>
            <Text styleName="text-white text-center px-6">
              Las fotos de registro aparecerán aquí para comparar el antes y el
              después.
            </Text>
          </HeroCardImage>
          <SectionTitle>Medidas</SectionTitle>
          <CardProgressMsg text=" El progreso de tu peso corpotal podrás verlo aquí" />
          <SectionTitle>Ejecicios</SectionTitle>
          <CardProgressMsg text="A medida que realices entrenamientos, la progresión del ejercicio se mostrará aquí" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProgressScreen;
