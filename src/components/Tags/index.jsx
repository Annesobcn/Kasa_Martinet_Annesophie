import React from 'react'
import * as style from './style.module.css'

const Tags = ({ getTag }) => {
  return (
    <div className={style.tag}>
      <p className={style.tagtexte}>{getTag}</p>
    </div>
  )
}
export default Tags
