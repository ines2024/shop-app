import React from 'react'
import Shopcard from './Shopcard'

function Shoplist({products}) {
  return (
    <div style={{display:'flex',gap:'20px'}}>

{products.map(e=>
<Shopcard product={e}/>
    )
    }
    </div>
  )
}

export default Shoplist