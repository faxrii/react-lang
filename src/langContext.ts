import React from 'react'
 export const langs={
  az:{
      home:'ana sehife',
      about:'haqqinda',
      text:'web site dilini deyisdirmek'
      

  },
  en:{
    home:' home',
    about:'about',
    text:'switch language in website'
  }
 }

 const langContext=React.createContext(langs.az)
 export default langContext