'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecentActivity } from '@/lib/recentActivity';
import { getArticleById } from '@/lib/articles';

export function RecentActivity({ article }) {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const recent = getRecentActivity();
        // Get full article details for each recent activity
        const articlesWithDetails = recent
            .map(activity => {
                const fullArticle = getArticleById(activity.id);
                return fullArticle ? { ...activity, title: fullArticle.title } : null;
            })
            .filter(Boolean);
        setActivities(articlesWithDetails);
    }, [article]); // Update when article changes

    if (activities.length === 0) {
        return (
            <div className="rounded-sm py-2 px-4">
                <h1 className="text-lg font-semibold py-2 text-white">Active Research</h1>
                <hr className="mb-2 border-gray-700" />
                <p className="px-4 py-2 text-gray-400 text-sm">No recent activity</p>
            </div>
        );
    }

    return (
        <div className="rounded-sm py-2 px-4">
            <h1 className="text-lg font-semibold py-2 text-white">Active Research</h1>
            <hr className="mb-2 border-gray-700" />
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <Link 
                            href={`/articles/${activity.id}`}
                            className="block px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm"
                        >
                            {activity.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
