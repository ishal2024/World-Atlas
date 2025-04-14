import { useEffect, useState } from "react";

async function FetchApi() {
 


    try {
      let res = await fetch("https://restcountries.com/v3.1/all");
      let res2 = await res.json();
      console.log('fetch rendered' , res2)
      return res2
      
    } catch (error) {
      console.log("Error fetching data:");
    }
  
 

}


  
  
export default FetchApi



