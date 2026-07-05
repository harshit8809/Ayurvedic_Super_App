// import React from "react";
// import {
//     FlatList,
//     StyleSheet,
//     TouchableOpacity,
//     View,
// } from "react-native";

// import { DOCTOR_CATEGORIES } from "../constant/dummyData/dummyData";
// import AppText from "./AppText";
// import { APP_COLORS } from "../constant/appColors";

// interface Props {
//     selected: string;
//     onSelect: (category: string) => void;
// }

// const CategoryTab = ({ selected, onSelect }: Props) => {
//     return (
//         <View>
//             <FlatList
//                 horizontal
//                 data={DOCTOR_CATEGORIES}
//                 keyExtractor={(item) => item}
//                 showsHorizontalScrollIndicator={false}
//                 renderItem={({ item }) => {
//                     const isSelected = selected === item;

//                     return (
//                         <TouchableOpacity
//                             style={[
//                                 styles.categoryButton,
//                                 isSelected && styles.selectedCategory,
//                             ]}
//                             onPress={() => onSelect(item)}
//                         >
//                             <AppText
//                                 style={[
//                                     styles.text,
//                                     isSelected && styles.selectedText,
//                                 ]}
//                             >
//                                 {item}
//                             </AppText>
//                         </TouchableOpacity>
//                     );
//                 }}
//             />
//         </View>
//     );
// };

// export default React.memo(CategoryTab);

// const styles = StyleSheet.create({
//     categoryButton: {
//         paddingHorizontal: 16,
//         paddingVertical: 10,
//         marginRight: 10,
//         borderRadius: 25,
//         backgroundColor: "#EFEFEF",
//     },

//     selectedCategory: {
//         backgroundColor: APP_COLORS.PRIMARY,
//     },

//     text: {
//         color: APP_COLORS.TEXT_SECONDARY,
//     },

//     selectedText: {
//         color: "#FFF",
//         fontWeight: "600",
//     },
// });




import React from "react";
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

import AppText from "./AppText";
import { APP_COLORS } from "../constant/appColors";

interface Props {
    data: string[];
    selected: string;
    onSelect: (value: string) => void;
    containerStyle?: ViewStyle;
}

const CategoryTab = ({
    data,
    selected,
    onSelect,
    containerStyle,
}: Props) => {
    return (
        <View style={containerStyle}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const isSelected = selected === item;

                    return (
                        <TouchableOpacity
                            style={[
                                styles.categoryButton,
                                isSelected &&
                                    styles.selectedCategory,
                            ]}
                            onPress={() => onSelect(item)}
                        >
                            <AppText
                                style={[
                                    styles.text,
                                    isSelected &&
                                        styles.selectedText,
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