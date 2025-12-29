// Recent Activity management using localStorage

const STORAGE_KEY = 'recentActivity';

export function getRecentActivity() {
    if (typeof window === 'undefined') return [];
    
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error reading recent activity:', error);
        return [];
    }
}

export function addToRecentActivity(article) {
    if (typeof window === 'undefined') return;
    
    try {
        let activities = getRecentActivity();
        
        // Remove if already exists
        activities = activities.filter(a => a.id !== article.id);
        
        // Add to beginning
        activities.unshift({
            id: article.id,
            title: article.title,
            date: new Date().toISOString(),
            category: article.categoryName || article.category
        });
        
        // Keep only last 10
        activities = activities.slice(0, 10);
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
    } catch (error) {
        console.error('Error saving recent activity:', error);
    }
}

export function clearRecentActivity() {
    if (typeof window === 'undefined') return;
    
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing recent activity:', error);
    }
}
