export function fetchCount(amount = 1) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  
  export function fetchUserDetails({token,id}){
    return new Promise(async(resolve,reject) =>{ 
      const response=await fetch(`http://localhost:8005/user/${id}`,{
        method:"get",
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(response.ok){
        const data =await response.json()
        resolve({data})
      }else{
        const err =await response.json()
        reject({err})
      }
    });
  }