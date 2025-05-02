import { Metadata } from 'next';
import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode
}
function TodoListLayout({ children }: BlogLayoutProps) {
  return <section id="todo-list-layout">{children}</section>;
}

export const generateMetadata = async (): Promise<Metadata> => ({ title: 'TodoList' });

export default TodoListLayout;
