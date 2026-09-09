import { useEffect, useRef, useState } from 'react';

import { PREVIEW_CONFIG, PREVIEW_HEIGHT } from './constants';

export const useProjectPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentMode, setCurrentMode] = useState<PreviewMode>('desktop');

  const [scale, setScale] = useState(1);

  const width = PREVIEW_CONFIG[currentMode].width;

  const iframeHeight = PREVIEW_HEIGHT / scale;

  const updateScale = (containerWidth: number) => {
    if (containerWidth <= 0) return;

    setScale(containerWidth / width);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    updateScale(container.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      updateScale(entry.contentRect.width);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [width]);

  return {
    containerRef,
    width,
    scale,
    iframeHeight,
    currentMode,
    setCurrentMode,
  };
};
