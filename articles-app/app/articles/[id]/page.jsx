'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getArticleById } from '@/lib/articles';
import { addToRecentActivity } from '@/lib/recentActivity';
import { Aside } from "@/components/aside/aside";
import { MenuModal } from "@/components/menuModal/menuModal";
import { Header } from "@/components/header/header";
import { Article } from "@/components/mainContent/article";

export default function ArticlePage() {
    const params = useParams();
    const article = getArticleById(params.id);

    useEffect(() => {
        if (article) {
            addToRecentActivity(article);
        }
    }, [article]);

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold mb-4">Article Not Found</h1>
                    <p className="text-gray-400">The article you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 grid-rows-[auto_1fr] gap-1 h-screen bg-gray-900">
            <Header article={article} />
            <Aside article={article} />
            <Article article={article} />
            <MenuModal article={article} />
        </div>
    );
}
