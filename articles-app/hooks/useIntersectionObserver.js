'use client';

import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver(elementIds, options = {}) {
    const [activeId, setActiveId] = useState('');
    const observerRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !elementIds || elementIds.length === 0) {
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
            ...options
        };

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver((entries) => {
            // Find the entry that is most visible (highest intersection ratio)
            let mostVisible = null;
            let maxRatio = 0;

            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    mostVisible = entry.target.id;
                }
            });

            if (mostVisible) {
                setActiveId(mostVisible);
            }
        }, observerOptions);

        // Observe all elements after a short delay to ensure they're rendered
        const timeoutId = setTimeout(() => {
            elementIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observerRef.current.observe(element);
                }
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [elementIds, JSON.stringify(options)]);

    return activeId;
}
