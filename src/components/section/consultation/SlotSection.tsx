// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import AppText from '../../AppText';
// import { APP_COLORS } from '../../../constant/appColors';
// import Divider from '../Divider';

// const SlotSection = ({groupedSlots, onPress, selectedSlot}:any) => {
//     return (
//         <View>
//             {Object.entries(groupedSlots).map(([date, slots]: any) => (
//                 <View key={date}>
//                     <AppText
//                         style={{
//                             fontSize: 16,
//                             fontWeight: "600",
//                             marginBottom: 10,
//                         }}
//                     >
//                         {date}
//                     </AppText>

//                     <View style={styles.slotContainer}>
//                         {slots.map((slot: any) => {
//                             const isSelected =
//                                 selectedSlot?.id === slot.id;

//                             return (
//                                 <TouchableOpacity
//                                     key={slot.id}
//                                     disabled={slot.isBooked}
//                                     // onPress={() => setSelectedSlot(slot)}
//                                     onPress={()=>onPress(slot)}
//                                     style={[
//                                         styles.slotChip,

//                                         isSelected &&
//                                         styles.selectedSlot,

//                                         slot.isBooked && {
//                                             opacity: 0.4,
//                                         },
//                                     ]}
//                                 >
//                                     <AppText
//                                         style={{
//                                             color: isSelected
//                                                 ? "#FFF"
//                                                 : "#727272",
//                                         }}
//                                     >
//                                         {slot.time}
//                                     </AppText>
//                                 </TouchableOpacity>
//                             );
//                         })}
//                     </View>

//                     <Divider height={20} />
//                 </View>
//             ))}
//         </View>
//     )
// }

// export default SlotSection

// const styles = StyleSheet.create({

//         slotContainer: {
//             flexDirection: "row",
//             flexWrap: "wrap",
//             gap: 10,
//         },
    
//         slotChip: {
//             paddingHorizontal: 16,
//             paddingVertical: 10,
//             borderRadius: 30,
//             borderWidth: 1,
//             borderColor: "#2E7D32",
//         },
    
//         selectedSlot: {
//             backgroundColor: APP_COLORS.PRIMARY,
//         },
// })




import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppText from "../../../components/AppText";
import Divider from "../../../components/section/Divider";
import { Slot } from "../../../types/slot";

interface Props {
  groupedSlots: Record<string, Slot[]>;
  selectedSlot: Slot | null;
  onSelectSlot: (slot: Slot) => void;
}

const SlotSection = ({
  groupedSlots,
  selectedSlot,
  onSelectSlot,
}: Props) => {
  return (
    <>
      {Object.entries(groupedSlots).map(
        ([date, slots]) => (
          <View key={date}>
            <AppText style={styles.date}>
              {date}
            </AppText>

            <View style={styles.slotContainer}>
              {slots.map(slot => {
                const isSelected =
                  selectedSlot?.id === slot.id;

                return (
                  <TouchableOpacity
                    key={slot.id}
                    disabled={slot.isBooked}
                    onPress={() =>
                      onSelectSlot(slot)
                    }
                    style={[
                      styles.slotChip,
                      isSelected &&
                        styles.selectedSlot,
                      slot.isBooked &&
                        styles.disabledSlot,
                    ]}
                  >
                    <AppText
                      style={[
                        styles.slotText,
                        isSelected &&
                          styles.selectedText,
                      ]}
                    >
                      {slot.time}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Divider height={20} />
          </View>
        )
      )}
    </>
  );
};

export default React.memo(SlotSection);

const styles = StyleSheet.create({
  date: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  slotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  slotChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#4CAF50",
    marginRight: 10,
    marginBottom: 10,
  },

  selectedSlot: {
    backgroundColor: "#4CAF50",
  },

  disabledSlot: {
    opacity: 0.4,
  },

  slotText: {
    color: "#727272",
  },

  selectedText: {
    color: "#FFF",
  },
});