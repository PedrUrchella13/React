import React from 'react'
import Styles from "./Link.module.css";

const Link = ({ url, children}) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  )
}

export default Link
