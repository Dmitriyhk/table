import React, { useEffect, useRef, useState } from "react";

export const UseIntersection = ({
  root = null,
  rootMargin = undefined,
  threshold = 0,
}) => {
  const [entrys, updateEntry] = useState();
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        updateEntry(entry);
      },
      { root, rootMargin, threshold }
    );
    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [node, root, rootMargin]);

  return [setNode, entrys];
};
