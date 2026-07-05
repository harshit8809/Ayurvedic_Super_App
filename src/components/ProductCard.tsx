import React from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

import AppText from "./AppText";
import { Product } from "../types/product";
import { useAppTheme } from "../theme/ThemeProvider";
import { Heart } from "lucide-react-native";
import { APP_COLORS } from "../constant/appColors";

interface Props {
    product: Product;
    onPress: () => void;
    onWishlist: () => void;
}

const ProductCard = ({
    product,
    onPress,
    onWishlist,
}: Props) => {
    const { colors } = useAppTheme()

    return (
        <Pressable
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={onPress}
        >
            <Image
                source={{
                    uri: product.image,
                }}
                style={styles.image}
            />

            <AppText
                numberOfLines={1}
                style={styles.title}
            >
                {product.name}
            </AppText>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <AppText>
                        ⭐ {product.rating}
                    </AppText>

                    <AppText>
                        ₹ {product.price}
                    </AppText>
                </View>

                <TouchableOpacity onPress={onWishlist}>
                    <Heart
                        size={22}
                        // stroke={1}
                        color={APP_COLORS.PRIMARY}
                    />
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};

export default React.memo(ProductCard);

const styles = StyleSheet.create({

    card: {
        width: "95%",


        borderRadius: 16,

        padding: 12,

        marginBottom: 14,
        borderWidth: 1
    },

    image: {

        width: "100%",

        height: 120,

        borderRadius: 10,
    },

    title: {

        marginTop: 10,

        fontWeight: "600",
    },
});