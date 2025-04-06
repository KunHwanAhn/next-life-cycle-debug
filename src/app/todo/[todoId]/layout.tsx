import React from 'react';

interface BlogDeatilLayoutProps {
  children: React.ReactNode
}
function BlogDeatilLayout({ children }: BlogDeatilLayoutProps) {
  console.log('blog - post - layout - component');

  return <section id="blog-post-layout">{children}</section>;
}

export default BlogDeatilLayout;
