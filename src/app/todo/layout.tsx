import { Metadata } from 'next';
import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode
}
function TodoListLayout({ children }: BlogLayoutProps) {
  console.log('TodoList - layout - component');

  return <section id="todo-list-layout">{children}</section>;
}

export const generateMetadata = async (): Promise<Metadata> => {
  console.log('TodoList - layout - generateMetadata');

  return { title: 'TodoList' };
};

export default TodoListLayout;
