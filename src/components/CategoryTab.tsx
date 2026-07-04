// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { DOCTOR_CATEGORIES } from '../constant/dummyData/dummyData'

// const CategoryTab = ({ onSelect }: any) => {
//     return (
//         <View>
//             <FlatList
//                 data={DOCTOR_CATEGORIES}
//                 renderItem={({ item }: any) => (
//                     <TouchableOpacity style={styles.categoryButton}
//                         onPress={() => onSelect(item)}
//                     >
//                         <Text>{item}</Text>
//                     </TouchableOpacity>
//                 )}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//             />
//         </View>
//     )
// }

// export default CategoryTab

// const styles = StyleSheet.create({
//     categoryButton: { padding: 10, backgroundColor: '#f0f0f0', marginRight: 10, borderRadius: 30, minWidth: 80, alignItems: 'center', justifyContent: 'center' }
// })


import React from "react";
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

import { DOCTOR_CATEGORIES } from "../constant/dummyData/dummyData";
import AppText from "./AppText";
import { APP_COLORS } from "../constant/appColors";

interface Props {
    selected: string;
    onSelect: (category: string) => void;
}

const CategoryTab = ({ selected, onSelect }: Props) => {
    return (
        <View>
            <FlatList
                horizontal
                data={DOCTOR_CATEGORIES}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const isSelected = selected === item;

                    return (
                        <TouchableOpacity
                            style={[
                                styles.categoryButton,
                                isSelected && styles.selectedCategory,
                            ]}
                            onPress={() => onSelect(item)}
                        >
                            <AppText
                                style={[
                                    styles.text,
                                    isSelected && styles.selectedText,
                                ]}
                            >
                                {item}
                            </AppText>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default React.memo(CategoryTab);

const styles = StyleSheet.create({
    categoryButton: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 25,
        backgroundColor: "#EFEFEF",
    },

    selectedCategory: {
        backgroundColor: APP_COLORS.PRIMARY,
    },

    text: {
        color: APP_COLORS.TEXT_SECONDARY,
    },

    selectedText: {
        color: "#FFF",
        fontWeight: "600",
    },
});