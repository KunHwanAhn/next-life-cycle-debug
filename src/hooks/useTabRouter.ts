import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';

const useTabRouter = () => {
  const router = useRouter();
  const routerRef = useRef(router);
  routerRef.current = router;

  const currentTab = router.query.tabId as string ?? undefined;

  const setTab = useCallback((newTabId: string, shallow = false) => {
    const { pathname, query } = routerRef.current;
    const newQuery = { ...query, tabId: newTabId };
    routerRef.current.replace({ pathname, query: newQuery }, undefined, { shallow });
  }, []);

  return {
    currentTab,
    setTab,
  };
};

export default useTabRouter;
