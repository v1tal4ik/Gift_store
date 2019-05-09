
## GIFT STORE DOCUMENTATION



### Demo

<b>Link:</b> https://gift-store.herokuapp.com


<b>Expample:</b>  https://youtu.be/DYPUHlxTIhE








Gift Store consist of two part `SHOP` and `STATISTIC`.

### About `SHOP`

Its a main page of SPA. On this page we can look `SHOP MENU` and some `PRODUCTS`.

`SHOP MENU` has some buttons and inputs:

- `CURRENT DATE` - we can change on a page current date. After change date orders will be made according to this date.
- `EURO` - this is a select input of currency in the whole SPA. We can choose currency(`EURO`, `USD`, `UAH`) and price of products will be changed.
- We can use a `search input` in order to find some products.
- `VIEW STATISTIC` - with this button we can load another page(`STATISTIC`).
- `BUY` - with this button we can make orders.
   * if order has been success/failed, we receive a notification about it.
   
   
 ### About `STATISTIC`
 
 In this page we can look `STATISTIC MENU` `LIST OF ORDERS` and `PROFIT`.
 
 
 `STATISTIC MENU` has some buttons and inputs:

- `DAY MONTH YEAR`  - are inputs for which we can choose date for `FILTER`. We can fill all fields or each separately.
  * if we choose only `YEAR` - the data will be filtered only for `YEAR`. The same with `DAY` or `MONTH`.
  * if we choose `YEAR` and `DAY` - the data will be filtered only for this paramets.The same with any combination. It's `FULL FILTER`
  * In order to get `all orders` we shoud choose field `day` `month` `year`in a parametrs.
- `CLEAR ALL` - this button deleting all orders which rendering at the moment, thier count are dispayed.
- `FILTER` - we shoud click this button after choosing a date. Only this way the date will be filtered REMEMBER IT!!! 
   * this button have a bug, which fixing soon. After deleting rendering all orders without filtering , despite in filter value.  
- `SHOP` - with this button we can load another page(`SHOP`).  
  
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

  
 ## P.S
 I write test only for reducers and OrderItem Component, but each component has `PropTypes`, it also protected against errors.
 
