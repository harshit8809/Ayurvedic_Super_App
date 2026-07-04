// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useAppTheme } from '../../theme/ThemeProvider';
// import AppText from '../../components/AppText';

// const HomeScreen = () => {
//   const { colors } = useAppTheme();
//   console.log('theme', colors);
//   return (
//     <View>
//       <AppText style={styles.text}>HomeScreen</AppText>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// })




import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  ShoppingBag,
  FileText,
  Stethoscope,
} from 'lucide-react-native';

import { useAppTheme } from '../../theme/ThemeProvider';
import SectionHeader from '../../components/section/SectionHeader';
import AppText from '../../components/AppText';
import Divider from '../../components/section/Divider';
import SearchBar from '../../components/elements/SearchBar';
import QuickActionCard from '../../components/section/home/QuickActionCard';
import UpcomingConsultationCard from '../../components/section/home/UpcomingConsultationCard';
import GreetingHeader from '../../components/section/home/GreetingHeader';
import { quickActions } from '../../constant/dummyData/dummyData';
import { SCREENS } from '../../constant/screens';

const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const { colors } = useAppTheme();

  // console.log('search--', search);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}>

      <GreetingHeader />
      <SearchBar search={search} setSearch={setSearch} />
      <Divider height={20} />
      <SectionHeader title="Quick Actions" />
      <Divider height={20} />

      <View style={styles.quickActionContainer}>
        {quickActions.map(item => {
          const Icon = item.Icon;
          return (
            <QuickActionCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={<Icon size={28} color={colors.primary} />}
              onPress={() => navigation.navigate(SCREENS.TAB, { screen: item.screen })}
            />
          );
        })}
      </View>

      <SectionHeader title="Upcoming Consultation" />
      <Divider height={20} />
      <UpcomingConsultationCard />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },
  quickActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
});