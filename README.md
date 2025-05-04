🛍️ ShopSmart – React Native E-Commerce Demo App
A cross-platform e-commerce demo app built using React Native and Redux Toolkit. It allows users to browse products, manage a cart, add/remove wishlist items, and update their profile with avatar upload support.

🚀 Features
🛒 Browse and add/remove products from the cart

❤️ Toggle wishlist items

👤 Edit profile with avatar image upload

🔔 Toast-based feedback notifications

📱 Fully functional on both Android and iOS

🧰 Tech Stack
Tool Purpose
React Native Cross-platform mobile development
Redux Toolkit Efficient and scalable state management
React Navigation Seamless navigation between screens
react-native-image-picker Image selection from camera/gallery
react-native-toast-message In-app toast notifications

📁 Folder Structure
bash
Copy
Edit
/src
/screens # Product, Cart, Profile screens
/components # Reusable UI components (e.g., Avatar, InputField)
/redux
/Slices # Redux slices (cart, wishlist, profile)
Store.ts # Root Redux store
/assets
/ScreenShots # App screenshots (Android & iOS)
Why this structure?
This modular and feature-based structure improves code organization, readability, and maintainability — especially as the app grows.

⚖️ Trade-offs & Shortcuts
⏳ Used toast notifications instead of custom modals for feedback to save UI development time.

🔗 Images are saved locally without uploading to a backend server (no cloud integration).

🧪 Product data is hardcoded to avoid backend/API setup.

📸 Screenshots
Android
assests/ScreenShots/Android

iOS
assests/ScreenShots/iOS
