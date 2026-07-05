import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { initializeWishlist, removeFromWishlist } from '../../redux/slice/wishlist'
import { useAppTheme } from '../../theme/ThemeProvider'
import AppText from '../../components/AppText'
import ProductCard from '../../components/ProductCard'
import BaseBtn from '../../components/elements/BaseBtn'
import { Product } from '../../types/product'
import { toast } from '../../utils/toast'

const WishlistScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch()
  const wishlistItems = useAppSelector(state => state.wishlist.items)
  const { colors } = useAppTheme()

  useEffect(() => {
    dispatch(initializeWishlist())
  }, [dispatch])

  const handleProductPress = useCallback((product: Product) => {
    navigation.navigate('ProductDetails', { data: product })
  }, [navigation])

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(removeFromWishlist(productId))
    toast.success('Removed from wishlist')
  }

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <View style={styles.itemWrapper}>
        <ProductCard
          product={item}
          onPress={() => handleProductPress(item)}
          onWishlist={() => handleRemoveFromWishlist(item.id)}
          heartIcon={false}
        />
        <TouchableOpacity
          style={[styles.removeBtn, { backgroundColor: colors.danger }]}
          onPress={() => handleRemoveFromWishlist(item.id)}
        >
          <AppText style={styles.removeBtnText}>Remove</AppText>
        </TouchableOpacity>
      </View>
    ),
    [colors, handleProductPress]
  )

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <AppText style={[styles.emptyText, { color: colors.textSecondary }]}>
        Your wishlist is empty
      </AppText>
      <AppText 
        style={[styles.emptySubtext, { color: colors.textSecondary }]}
      >
        Add products to your wishlist to see them here
      </AppText>
      <BaseBtn
        title="Continue Shopping"
        onPress={() => navigation.navigate('Shop')}
        style={styles.shopBtn}
      />
    </View>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {wishlistItems.length === 0 ? (
        renderEmptyState()
      ) : (
        <>
          <View style={styles.header}>
            <AppText style={[styles.headerTitle, { color: colors.text }]}>
              My Wishlist
            </AppText>
            <AppText style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
            </AppText>
          </View>
          
          <FlatList
            data={wishlistItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  )
}

export default WishlistScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
  },
  listContent: {
    padding: 12,
  },
  columnWrapper: {
    gap: 8,
    marginBottom: 8,
  },
  itemWrapper: {
    flex: 0.5,
  },
  removeBtn: {
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    // marginTop: 8,
  },
  removeBtnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 24,
  },
  shopBtn: {
    width: '100%',
  },
})