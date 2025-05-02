import React from 'react';
import Link, { LinkProps } from 'next/link';

import logger from '@/logger';

import styles from './TodoItem.module.scss';

export interface TodoItemProps {
  id: number;
  text: string;
  url: LinkProps['href'];
}
export default function TodoItem({ id, text, url }: TodoItemProps) {
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
