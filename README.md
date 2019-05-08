
## GIFT STORE DOCUMENTATION

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

- `DAY MONTH YEAR`  - its are inputs for which we can choose date for `FILTER`. We can fill all fields or each separately.
  * if we choose only `YEAR` - the data will be filtered only for `YEAR`. The same with `DAY` or `MONTH`.
  * if we choose `YEAR` and `DAY` - the data will be filtered only for this paramets.The same with any combination. It's `FULL FILTER`
  * In order to get `all orders` we shoud choose field `day` `month` `year`in a parametrs.
- `CLEAR ALL` - this button deleting all orders which rendering at the moment, thier count is dispayed.
   * this button have a bug, which fixing soon. After deleting rendering all orders without filtering despite in filter value.  
- `FILTER` - we shoud click this button after choosing a date. Only this way the date will be filtered REMEMBER IT!!! 
- `SHOP` - with this button we can load another page(`SHOP`).  
  
 
 
