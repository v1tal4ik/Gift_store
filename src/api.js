export const getProduct = ()=>{
    return fetch('https://api.myjson.com/bins/dlkz8')
    .then(response=>response.json());
 }

 export const getCourse = ()=>{
    return fetch(`http://data.fixer.io/api/latest?access_key=22e8c3c7c6b0166864f572f0aaf4f731`)
    .then((response)=>response.json())
    .then(result=>{
       const {UAH,USD,EUR} = result.rates;
       let obj = {
          UAH:Math.round(UAH),
          USD:Math.round(USD)+0.5,
          EUR:Math.round(EUR)
         }
       return obj;
    });
 }

 export async function setBuy(year,month,day,name,img,price){
    let order = {year,month,day,name,img,price};
    return fetch('/order',{
       method:'POST',
       mode:'cors',
       headers:{
          "Content-type":"text/plain; charset=UTF8"
       },
       body:JSON.stringify(order)
    })
    .then(response=>response.json())
    .then((response)=>response)
    .catch(err=>'Sorry, there was an error:(')  
 }


 export async function getALLOrder(){
  return fetch('/allOrder',{method:'GET'})
  .then(response=>response.json())
  .then(result=>result);
}

export async function getFilterOrder(params){
   return fetch('/filterOrder',{
      method:"POST",
      mode:'cors',
       headers:{
          "Content-type":"text/plain; charset=UTF8"
       },
       body:JSON.stringify(params)
   })
   .then(response=>response.json())
   .then(result=>result);
 }
 
 export async function getDeleteOrder(params){
   return fetch('/deleteOrder',{
      method:"POST",
      mode:'cors',
       headers:{
          "Content-type":"text/plain; charset=UTF8"
       },
       body:JSON.stringify(params)
   })
   .then(response=>response.json())
   .then(result=>result);
 }