import React from 'react';
import css from './FriendListItem.module.css';

export function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}