import React from 'react';

interface TodoItemLayoutProps {
  children: React.ReactNode
}
function TodoItemLayout({ children }: TodoItemLayoutProps) {
  return <section id="todo-item-layout">{children}</section>;
}

export default TodoItemLayout;
