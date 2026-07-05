import { ScrollView, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Product } from '../../types/product'
import { useAppTheme } from '../../theme/ThemeProvider'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addToWishlist, removeFromWishlist } from '../../redux/slice/wishlist'
import { Heart, ChevronLeft } from 'lucide-react-native'
import { showToast } from '../../utils/toast'
import AppText from '../../components/AppText'
import BaseBtn from '../../components/elements/BaseBtn'

const ProductDetails = ({ route, navigation }: any) => {
  const product: Product = route.params.data
  const { colors } = useAppTheme()
  const { bottom } = useSafeAreaInsets()
  const dispatch = useAppDispatch()
  const wishlistItems = useAppSelector(state => state.wishlist.items)
  
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    const wishlisted = wishlistItems.some(item => item.id === product.id)
    setIsWishlisted(wishlisted)
  }, [wishlistItems, product.id])

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id))
      showToast('success', 'Removed from Wishlist', 'Product removed from your wishlist')
    } else {
      dispatch(addToWishlist(product))
      showToast('success', 'Added to Wishlist', 'Product added to your wishlist')
    }
  }

  const handleAddToCart = () => {
    showToast('success', 'Added to Cart', `${product.name} added to your cart`)
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Product Image */}
        <View style={[styles.imageContainer, { backgroundColor: colors.card }]}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="cover"
          />
          {/* <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={24} color={colors.text} />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.wishlistButton}
            onPress={handleWishlistToggle}
          >
            <Heart
              size={24}
              color={isWishlisted ? '#EF4444' : colors.textSecondary}
              fill={isWishlisted ? '#EF4444' : 'none'}
            />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.infoSection}>
          <AppText style={[styles.title, { color: colors.text }]}>
            {product.name}
          </AppText>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <AppText style={[styles.rating, { color: colors.warning }]}>
              ★ {product.rating}
            </AppText>
          </View>

          {/* Price */}
          <View style={styles.priceContainer}>
            <AppText style={[styles.price, { color: colors.primary }]}>
              ₹{product.price}
            </AppText>
          </View>

          {/* Stock Status */}
          <AppText 
            style={[
              styles.stockStatus,
              { 
                color: product.stock > 0 ? colors.success : colors.danger 
              }
            ]}
          >
            {product.stock > 0 ? `✓ ${product.stock} in Stock` : '✗ Out of Stock'}
          </AppText>

          {/* Discount */}
          {product.discount > 0 && (
            <View style={[styles.discountBadge, { backgroundColor: colors.danger }]}>
              <AppText style={[styles.discountText, { color: colors.background }]}>
                {product.discount}% OFF
              </AppText>
            </View>
          )}
        </View>

        {/* Brand Section */}
        <View style={styles.descriptionSection}>
          <AppText style={[styles.sectionTitle, { color: colors.text }]}>
            Brand
          </AppText>
          <AppText 
            style={[styles.description, { color: colors.textSecondary }]}
          >
            {product.brand}
          </AppText>
        </View>

        {/* Category Section */}
        <View style={styles.categorySection}>
          <AppText style={[styles.sectionTitle, { color: colors.text }]}>
            Category
          </AppText>
          <View style={[styles.categoryTag, { backgroundColor: colors.primary }]}>
            <AppText style={styles.categoryText}>
              {product.category}
            </AppText>
          </View>
        </View>

        {/* Wishlist Info */}
        <View style={styles.wishlistInfoSection}>
          <Heart
            size={20}
            color={colors.danger}
            fill={colors.danger}
            style={{ marginRight: 8 }}
          />
          <AppText 
            style={[styles.wishlistInfo, { color: colors.textSecondary }]}
          >
            {isWishlisted ? 'Added to your wishlist' : 'Add to your wishlist'}
          </AppText>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View 
        style={[
          styles.footer, 
          { 
            paddingBottom: bottom + 12, 
            borderTopColor: colors.border 
          }
        ]}
      >
        <BaseBtn
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          onPress={handleWishlistToggle}
        />
        <BaseBtn
          title="Add to Cart"
          onPress={handleAddToCart}
          disabled={product.stock <= 0}
        />
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoSection: {
    padding: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    marginRight: 12,
  },
  stockStatus: {
    fontSize: 13,
    fontWeight: '600',
  },
  discountBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  discountText: {
    fontSize: 12,
    fontWeight: '600',
  },
  descriptionSection: {
    padding: 16,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  categorySection: {
    padding: 16,
    borderBottomWidth: 1,
  },
  categoryTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  categoryText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  wishlistInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  wishlistInfo: {
    fontSize: 13,
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    gap: 8,
  },
})