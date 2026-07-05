# 🌿 Ayurvedic Super App

A React Native application developed as part of a technical assessment.

The application demonstrates scalable React Native architecture, offline-ready patterns, pagination, reusable components, search, filtering, booking flow, and e-commerce module implementation using mocked services.

---

# 📱 Modules Implemented

## ✅ Module 1 – Consultation

Implemented features:

- Doctor Listing
- Pagination (Infinite Scroll)
- Search with Debouncing
- Filter by Specialization
- Doctor Details Screen
- Available Slot Selection
- Appointment Booking Flow
- Upcoming Booking Service
- Booking Cancellation Service (Business Logic)
- Slot Validation
  - Booked Slot
  - Expired Slot
  - Slot Conflict Prevention
  - Double Booking Prevention

---

## ✅ Module 2 – Shop (Partially Implemented)

Implemented features:

- Product Listing
- Infinite Scroll
- Search
- Category Filter
- Responsive Product Grid
- Reusable Product Card

Planned (Not Completed):

- Cart
- Quantity Update
- Checkout Summary
- Local Cart Persistence

---

## 🚧 Module 3 – Health Records

Not yet implemented.

Planned features:

- Health Record Listing
- Search
- Filter
- Details Screen

---

# 🏗️ Architecture

The project follows a modular structure with clear separation of concerns.

```
src
│
├── components
├── constant
├── customHooks
├── navigation
├── screens
├── services
├── theme
├── types
└── utils
```

Major architectural principles:

- Reusable Components
- Separation of Business Logic
- Mock Service Layer
- Custom Hooks
- Reusable UI Components
- Folder Structure

---

# ⚙️ Technologies Used

## Framework

- React Native 0.86

## Language

- TypeScript

## Navigation

- React Navigation v7

## State Management

- React Hooks

## Lists

- FlashList (@shopify/flash-list)

## Local Storage

- MMKV (Prepared for future persistence)

## Icons

- lucide-react-native

## Safe Area

- react-native-safe-area-context

## Mock Data

- @faker-js/faker

---

# 🚀 Features Implemented

## Doctor Module

- Infinite Pagination
- Debounced Search
- Category Filtering
- Dynamic Doctor Details
- Dynamic Slot Generation
- Slot Selection
- Booking Service
- Booking Validation

---

## Product Module

- Infinite Pagination
- Search
- Category Filter
- Responsive Grid Layout
- Product Details
- Wishlist

---

# 📦 Reusable Components

Some reusable UI components developed during the assignment:

- BaseBtn
- SearchBar
- CategoryTab
- DoctorCard
- ProductCard
- SectionHeader
- Divider
- GreetingHeader
- QuickActionCard
- SlotSection
- InfoSection

---

# 🔧 Custom Hooks

- useDoctors
- useProducts
- useDebounce

---

# 📚 Services

- doctor.service.ts
- booking.service.ts
- product.service.ts

These services simulate API behaviour with pagination, filtering, searching and booking logic.

---

# 📈 Performance Optimizations

- FlashList for rendering large datasets
- Memoized Components using React.memo
- useCallback
- useMemo
- Debounced Search
- Infinite Scrolling
- Pagination
- Component Reusability

---

# 📋 Assumptions

Since no backend APIs were provided, mocked service layers were created using Faker.js to simulate production-like API behaviour.

The application is designed so that the mocked services can be replaced with real REST APIs with minimal changes.

---

# ⚠️ Limitations

Due to the time constraints of the assessment, not all requested modules and features were completed.

The focus was placed on:

- Clean Architecture
- Reusable Components
- Business Logic
- Performance
- Scalability
- Maintainability

The remaining features can be integrated on top of the existing architecture without major structural changes.

---

# ▶️ Running the Project

Install dependencies

```bash
npm install
```

Start Metro

```bash
npm start
```

Run Android

```bash
npm run android
```

Run iOS

```bash
npm run ios
```

---

# 👨‍💻 Author

Harshit Kumar

React Native Developer
