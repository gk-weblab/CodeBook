
async function getSession(){
    const id = JSON.parse(sessionStorage.getItem("cbid"))
    const token = sessionStorage.getItem("token")
  
return {id,token}
}

export async function getUser(){
    const {token} = await getSession()
    const requestOptions = {
        method: "GET",
        headers: {"Content-type":"application/json",Authorization:`Bearer ${token}`}
    }
    const response = await fetch(`${process.env.REACT_APP_URL}600/users/${34}`,requestOptions)
    if(!response.ok){
         throw response
    }
    const data = await response.json()
    return data
   
}
export async function getUserOrders() {
    
    const {id,token}  = await getSession()
    console.log(id,token)
    const response = await fetch(`${process.env.REACT_APP_URL}660/orders?user.id=${id}`,{
      method: "GET",
      headers: {"Content-type":"application/json",Authorization:`Bearer ${token}`}
  });
  const data = await response.json()
  console.log('data',data)
  return data
  
   }
export async function createOrder(order) {
    try {
        const {token} = await getSession()
    const response = await fetch(`${process.env.REACT_APP_URL}660/orders`,{
        method: "POST",
        headers: {"Content-type":"application/json",Authorization:`Bearer ${token}`},
        body: JSON.stringify(order)
    })
    const data = await response.json()
    return {data:data,status:response.ok}
   }
   catch (error){
        return {data:error,status:false}
   }
}

    
