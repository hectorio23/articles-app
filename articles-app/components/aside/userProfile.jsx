
export function UserProfile({ article }) {
    const authorName = article?.author || 'Héctor Adán';
    const authorTitle = 'Experienced Systems Engineer';
    const authorDescription = 'Technical deep dives into systems, cloud architecture, and failure modes.';

    return (
        <>
            <div className="my-3">
                <img
                    className="rounded-full m-2 bg-gray-700 inline-block"
                    width={80}
                    height={80}
                    src="/profile.png"
                    alt="User Profile"
                />

                <div className="inline-block align-middle">
                    <p className="text-xl font-semibold text-white">{authorName}</p>
                    <p className="text-gray-400 text-sm">{authorTitle}</p>
                </div>
            </div>

            <hr className="border-gray-700 my-2" />

            <div className="p-3 mb-2 text-gray-300 text-sm">
                {authorDescription}
            </div>
        </>
    );
}
