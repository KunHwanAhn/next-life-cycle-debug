import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode
}
function TodoListLayout({ children }: BlogLayoutProps) {
  return <section id="todo-list-layout">{children}</section>;
}

export default TodoListLayout;
