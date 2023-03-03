import React from 'react'
import styles from '../../styles/Home.module.css'

import style2 from '../../styles/main.module.scss'
function Snowballs({id,style}) {
  return (
    <div className={style2.snowball} id={`id${id}`} style={style}>*</div>
  )
}

export default Snowballs