'use client';

import Link from 'next/link';
import { categories } from '@/lib/articles';

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-semibold mb-8">Engineering Notes</h1>
                <p className="text-xl text-gray-300 mb-12">Long-form technical analysis and commentary. No hype. No shortcuts.</p>
                
                <div className="space-y-12">
                    {categories.map((category) => (
                        <div key={category.id} className="border border-gray-700 rounded-lg p-6 bg-gray-800">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400">{category.name}</h2>
                            
                            {category.articles.length === 0 ? (
                                <p className="text-gray-400">No articles in this category yet.</p>
                            ) : (
                                <ul className="space-y-3">
                                    {category.articles.map((article) => (
                                        <li key={article.id}>
                                            <Link 
                                                href={`/articles/${article.id}`}
                                                className="block p-4 border border-gray-700 rounded hover:bg-gray-700 hover:border-blue-500 transition-colors"
                                            >
                                                <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                                    <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                    <span>•</span>
                                                    <span>{article.readTime} min read</span>
                                                    <span>•</span>
                                                    <span>{article.views.toLocaleString()} views</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
