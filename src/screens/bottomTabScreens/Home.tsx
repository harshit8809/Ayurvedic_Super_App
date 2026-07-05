import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useAppTheme } from '../../theme/ThemeProvider';
import SectionHeader from '../../components/section/SectionHeader';
import Divider from '../../components/section/Divider';
import QuickActionCard from '../../components/section/home/QuickActionCard';
import GreetingHeader from '../../components/section/home/GreetingHeader';
import { quickActions } from '../../constant/dummyData/dummyData';
import { SCREENS } from '../../constant/screens';
import AppText from '../../components/AppText';
import { useAppSelector } from '../../redux/hooks';
import { fetchDoctors } from '../../services/doctor.service';
import { fetchProducts } from '../../services/product.service';

const HomeScreen = ({ navigation }: any) => {
  const { colors } = useAppTheme();
  const mode = useAppSelector((s) => s?.theme?.mode)

  useEffect(() => {
    fetchDoctors(1);
    fetchProducts(1);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}>

      <GreetingHeader />
      {/* <SearchBar search={search} setSearch={setSearch} /> */}
      <AppText>App theme: {mode}</AppText>
      <Divider height={20} />
      <SectionHeader title="Quick Actions" />
      <Divider height={20} />

      <View style={styles.quickActionContainer}>
        {quickActions.map((item) => {
          const Icon = item.Icon;
          return (
            <QuickActionCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={<Icon size={28} color={colors.primary} />}
              onPress={() => {
                if (item.navigator === "tab") {
                  navigation.navigate(SCREENS.TAB, {
                    screen: item.screen,
                  });
                } else {
                  navigation.navigate(item.screen);
                }
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 10,
    paddingBottom: 50,
  },
  quickActionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
});