'use client';

import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Contents({ article }) {
    const subtitles = article?.subtitles || [];
    const subtitleIds = subtitles.map(sub => sub.id);
    const activeId = useIntersectionObserver(subtitleIds);

    if (subtitles.length === 0) {
        return null;
    }

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="py-2 px-4">
            <hr className="mb-2 border-gray-700" />
            <h2 className="font-semibold py-2 text-white">Contents</h2>
            <ul>
                {subtitles.map((subtitle, index) => (
                    <li 
                        key={subtitle.id}
                        onClick={() => handleClick(subtitle.id)}
                        className={`px-4 py-1.5 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm ${
                            activeId === subtitle.id 
                                ? 'border-l-2 border-blue-500 text-blue-400 pl-3' 
                                : 'text-gray-300'
                        }`}
                    >
                        {subtitle.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
