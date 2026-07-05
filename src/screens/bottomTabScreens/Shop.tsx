import React, { useCallback, useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initializeWishlist, addToWishlist, removeFromWishlist } from "../../redux/slice/wishlist";
import { toast } from "../../utils/toast";

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

  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(state => state.wishlist.items);

  // Initialize wishlist from storage
  useEffect(() => {
    dispatch(initializeWishlist());
  }, [dispatch]);

  const handleWishlistToggle = useCallback((product: Product) => {
    const isWishlisted = wishlistItems.some(item => item.id === product.id);
    
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      toast.error("Removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist");
    }
  }, [wishlistItems, dispatch]);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => {
      const isWishlisted = wishlistItems.some(w => w.id === item.id);
      
      return (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAILS, { data: item })}
          onWishlist={() => handleWishlistToggle(item)}
          isWishlisted={isWishlisted}
          heartIcon={true}
        />
      );
    },
    [wishlistItems, navigation, handleWishlistToggle]
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