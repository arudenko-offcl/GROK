import styles from '../Nav.module.scss'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const NavItem = (props) => {
  const { data } = props;
  return (
  <NavLink
      className={
    ({ isActive }) => {
      const classNames = [styles.ForumNavItem];
      if(isActive) classNames.push(styles.ForumNavItem__active);
      return classNames.join(" ");
      }
  }
      to={'/forum/' + data.path}>{ data.name }
  </NavLink>
  );

};
