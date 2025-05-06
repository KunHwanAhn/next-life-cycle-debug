import React from 'react';
import Link, { LinkProps } from 'next/link';

import logger from '@/logger';

import styles from './TodoListItem.module.scss';

export interface TodoListItemProps {
  id: number;
  text: string;
  url: LinkProps['href'];
}
export default function TodoListItem({ id, text, url }: TodoListItemProps) {
  const removeTodo = (targetId: number) => {
    logger.info(`remove ${targetId}`);
  };

  return (
    <li className={styles['todo-item']}>
      <Link href={url}>
        {text}
      </Link>
      <button
        type="button"
        onClick={() => { removeTodo(id); }}
      >
        삭제
      </button>
    </li>
  );
}
