import React, { useCallback } from "react";
import {
  ActivityIndicator,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import SearchBar from "../../components/elements/SearchBar";
import Divider from "../../components/section/Divider";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../customHooks/useProducts";
import { Product } from "../../types/product";
import CategoryTab from "../../components/CategoryTab";
import { PRODUCT_CATEGORIES } from "../../constant/dummyData/dummyData";
import { SCREENS } from "../../constant/screens";

const ShopScreen = ({ navigation }: any) => {

  const {
    products,
    loading,
    hasMore,
    loadProducts,
    search,
    setSearch,
    category,
    setCategory,
  } = useProducts();

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        product={item}
        onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAILS, { data: item })}
        onWishlist={() => console.log("toggle wishlist")}
      />
    ),
    []
  );

  return (

    <View
      style={{
        flex: 1,
        padding: 15,
      }}
    >
      <SearchBar
        search={search}
        setSearch={setSearch}
        options={true}
        onHeartPress={() => navigation.navigate(SCREENS.WISHLIST_SCREEN)}
      />
      <Divider height={10} />
      <CategoryTab
        data={PRODUCT_CATEGORIES}
        selected={category}
        onSelect={setCategory}
      />
      <Divider height={12} />
      <FlashList
        data={products}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
        onEndReached={() => {
          if (hasMore) {
            loadProducts();
          }
        }}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          loading
            ? <ActivityIndicator />
            : null
        }
      />
    </View>
  );

};

export default ShopScreen;