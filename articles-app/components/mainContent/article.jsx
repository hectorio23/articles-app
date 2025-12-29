import { DateComponent } from "./dateComponent";
import { TitleInfo } from "./titleInfo";

export function Article({ article }) {
    if (!article) {
        return (
            <main className="w-full col-span-3 border border-gray-700 rounded-3xl px-6 py-8 relative z-10 bg-gray-800 h-full overflow-y-auto">
                <p className="text-gray-400">Loading article...</p>
            </main>
        );
    }

    return (
        <main className="w-full col-span-3 border border-gray-700 rounded-3xl px-6 py-8 relative z-10 bg-gray-800 h-full overflow-y-auto" >
            <DateComponent article={article} />
            <TitleInfo article={article} />
            <div 
                className="article-content mt-8 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                    color: '#e5e7eb'
                }}
            />
        </main>
    );
}
