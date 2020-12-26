# E-commerce with React

Npm package ->
exception installation for sass is : npm install node-sass@4.14.1
npm install react-router-dom
npm install --save redux-logger redux react-redux
npm install reselect
npm install redux-persist (ex. localStorage ideal)

# Project Structure

- Hompage -> homepage.component.jsx , -> Homepage.styles.scss

# update\*\*

pages/
/homepage/Homepage.component.jsx , Hompage.styles.scss
/shop/shop.component.jsx, shop.styles.scss
/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx, sign-in-and-sign-up.scss
/form-input/form-input.component.jsx/form-input.styles.scss
/custom-button/custom-button.componenet.jsx, custom-button.styles.scss
/checkout/ checkout.component.jsx, checkout.styles.scss

=========
components/
/directory / directory.component.jsx , directory.styles.scss
/menu-item / menu-item.compoenent.jsx, menu-item.component.scss
/collection-preview/collection-preview.component.jsx, collection-preview.styles.scss
/collection-item/collection-item.component.jsx, collection-item.styles.scss
/header/header.component.jsx/ header.styles.scss
/sign-in/sign-in.component.jsx, sign-in.styles.scss
/sign-up/sign-up.component.jsx, sign-up.styles.scss

/cart-icon/cart-icon.component.jsx, cart-icon.styles.scss
/cart-dropdown/cart-dropdown.component.jsx, cart-dropdown.styles.scss
/cart-item/cart-item.component.jsx, cart-item.styles.scss

/checkout-item/checkout-item.component.jsx , checkout-item.styles.scss

# firebase

firebase/firebase.utils.js

# redux

/root-reducer.js
/directory
-/directory.reducer.js
-/directory.selector.js

/shop
-/shop.reducer.js
-/shop.data.js

/user/
-/user.reducer.js
-/user.action.js
-/user.types.js

/cart/
-/cart.reducer.js
-/cart.action.js
-/cart.types.js
-/cart.utils.js

/store.js
