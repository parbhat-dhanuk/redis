import client from "./client.js";

const init = async ()=>{
    await client.set("msg:2","hello redis from nodejs")
    await client.expire("msg:2",10)
    
 const result = await client.get("msg:2")
 console.log(result)
}

init()