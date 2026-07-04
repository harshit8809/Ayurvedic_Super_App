import React, { useCallback } from "react";
import {
  ActivityIndicator,
  Keyboard,
  View,
} from "react-native";
import { useDoctors } from "../../customHooks/useDoctors";
import DoctorCard from "../../components/DoctorCard";
import SearchBar from "../../components/elements/SearchBar";
import Divider from "../../components/section/Divider";
import { Doctor } from "../../types/doctor";
import AppText from "../../components/AppText";
import { FlashList } from "@shopify/flash-list";
import CategoryTab from "../../components/CategoryTab";
import { SCREENS } from "../../constant/screens";


const Consultation = ({ navigation }: any) => {

  const {
    doctors,
    loading,
    hasMore,
    loadDoctors,
    search,
    setSearch,
    category,
    setCategory,
  } = useDoctors();

  // console.log('doctors--', doctors);

  const renderDoc = useCallback(({ item }: { item: Doctor }) => (
    <DoctorCard doctor={item} onPress={() => navigation.navigate(SCREENS.DOCTOR_DETAILS, { doctorId: item.id })} />
  ), []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>

      <SearchBar search={search}
        setSearch={setSearch}
      />
      <Divider height={10} />

      <CategoryTab
        selected={category}
        onSelect={setCategory}
      />
      <Divider height={8} />


      <FlashList
        data={doctors}
        keyExtractor={item => item.id}
        renderItem={renderDoc}
        onEndReached={() => {
          if (hasMore) loadDoctors();
        }}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={
          !loading ? (
            <AppText style={{ textAlign: "center", marginTop: 40 }}>
              No doctors found
            </AppText>
          ) : null
        }
        ListFooterComponent={
          loading ? <ActivityIndicator /> : null
        }
        onScroll={() => Keyboard.dismiss()}
      />
    </View>
  );
};

export default Consultation;