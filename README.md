# E-commerce with React

Npm package ->
exception installation for sass is : npm install node-sass@4.14.1
npm install react-router-dom
npm install --save redux-logger redux react-redux
npm install reselect
npm install redux-persist (ex. localStorage ideal)
npm install lodash.memoize
npm install react-stripe-checkout
npm install styled-components
npm install --save redux-thunk
npm install redux-saga

# Project Structure

- Hompage -> homepage.component.jsx , -> Homepage.styles.scss

# update\*\*

pages/
/homepage
-/Homepage.component.jsx , Hompage.styles.scss

/shop
-/shop.component.jsx, shop.styles.scss

/sign-in-and-sign-up
-/sign-in-and-sign-up.component.jsx, sign-in-and-sign-up.scss

/form-input
-/form-input.component.jsx/form-input.styles.scss

/custom-button
-/custom-button.componenet.jsx, custom-button.styles.scss

/checkout
-/checkout.component.jsx, checkout.styles.scss

/collection
-/collection.componenet.jsx, collection.styles.scss, collection.container.jsx

=========
components/
/directory
-/directory.component.jsx , directory.styles.scss

/menu-item
-/menu-item.compoenent.jsx, menu-item.component.scss

/collection-preview
-/collection-preview.component.jsx, collection-preview.styles.scss, collection-preview.container.jsx

/collection-item
-/collection-item.component.jsx, collection-item.styles.scss

/header
-/header.component.jsx/ header.styles.scss

/sign-in
-/sign-in.component.jsx, sign-in.styles.scss

/sign-up
-/sign-up.component.jsx, sign-up.styles.scss

/cart-icon
-/cart-icon.component.jsx, cart-icon.styles.scss

/cart-dropdown
-/cart-dropdown.component.jsx, cart-dropdown.styles.scss

/cart-item
-/cart-item.component.jsx, cart-item.styles.scss

/checkout-item
-/checkout-item.component.jsx , checkout-item.styles.scss

/collection-overview
-/collection-overview.component.jsx, collection-overview.styles.scss

/stripe-button
-/stripe-button.component.jsx, stripe-button.styles.scss

# firebase

firebase/firebase.utils.js

# redux

/root-reducer.js
/root-saga.js
/directory
-/directory.reducer.js
-/directory.selector.js

/shop
-/shop.reducer.js
-/shop.data.js
-/shop.selector.js
-/shop.types.js
-/shop.action.js
-/shop.sagas.js

/user/
-/user.reducer.js
-/user.action.js
-/user.types.js
-/user.sagas.js

/cart/
-/cart.reducer.js
-/cart.action.js
-/cart.types.js
-/cart.utils.js

/store.js
