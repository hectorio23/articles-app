// Mock data for articles and categories
export const categories = [
    {
        id: 'bootloaders',
        name: 'Bootloaders',
        articles: [
            {
                id: 'bootloader-intro',
                title: 'Low-Level Systems Programming: Bootloaders, Kernel Initialization, and Hardware Realities',
                category: 'bootloaders',
                date: '2024-04-22',
                author: 'Héctor Adán',
                views: 14000,
                readTime: 14,
                language: 'EN',
                originalLanguage: 'ES',
                domain: 'Systems & OS',
                concepts: ['Kernel Development', 'Operating Systems', 'System Boot'],
                subtitles: [
                    { id: 'foundation', text: 'The Foundation of Bootstrapping' },
                    { id: 'bootloaders-kernel', text: 'Bootloaders, Kernel Initialization' },
                    { id: 'boot-stages', text: 'Stages of the Boot Process' },
                    { id: 'kernel-deep-dive', text: 'Kernel Initialization Deep Dive' },
                    { id: 'memory-hardware', text: 'Memory Handling at the Hardware Level' },
                    { id: 'memory-management', text: 'Memory Management Realities' }
                ],
                content: `
                    <h2 id="foundation">The Foundation of Bootstrapping</h2>
                    <p>When you press the power button on your computer, a complex sequence of events unfolds. The boot process is one of the most critical phases in system initialization, bridging the gap between hardware power-on and a fully functional operating system.</p>
                    
                    <h2 id="bootloaders-kernel">Bootloaders, Kernel Initialization</h2>
                    <p>The bootloader is responsible for loading the kernel into memory and transferring control to it. This process involves several stages, each with specific responsibilities and challenges.</p>
                    
                    <h2 id="boot-stages">Stages of the Boot Process</h2>
                    <p>The boot process consists of several distinct stages: BIOS/UEFI initialization, bootloader execution, kernel loading, and kernel initialization. Understanding each stage is crucial for system debugging and optimization.</p>
                    
                    <h2 id="kernel-deep-dive">Kernel Initialization Deep Dive</h2>
                    <p>Kernel initialization is a critical phase that sets up the core system structures, initializes hardware drivers, and prepares the system for user-space programs. This phase must be efficient yet thorough.</p>
                    
                    <h2 id="memory-hardware">Memory Handling at the Hardware Level</h2>
                    <p>Understanding memory at the hardware level is crucial for system programmers. Memory management involves physical memory, virtual memory, and the complex interactions between them.</p>
                    
                    <h2 id="memory-management">Memory Management Realities</h2>
                    <p>Modern operating systems implement sophisticated memory management strategies to balance performance, security, and resource utilization. These strategies have evolved significantly over the decades.</p>
                `
            },
            {
                id: 'grub-bootloader',
                title: 'Understanding GRUB: A Comprehensive Guide',
                category: 'bootloaders',
                date: '2024-03-15',
                author: 'Héctor Adán',
                views: 8500,
                readTime: 10,
                language: 'EN',
                originalLanguage: 'ES',
                domain: 'Systems & OS',
                concepts: ['Bootloader', 'GRUB', 'Linux'],
                subtitles: [
                    { id: 'grub-intro', text: 'Introduction to GRUB' },
                    { id: 'grub-config', text: 'GRUB Configuration' },
                    { id: 'grub-troubleshooting', text: 'Troubleshooting GRUB' }
                ],
                content: `
                    <h2 id="grub-intro">Introduction to GRUB</h2>
                    <p>GRUB (Grand Unified Bootloader) is one of the most widely used bootloaders...</p>
                    
                    <h2 id="grub-config">GRUB Configuration</h2>
                    <p>Configuring GRUB requires understanding its configuration file...</p>
                    
                    <h2 id="grub-troubleshooting">Troubleshooting GRUB</h2>
                    <p>Common issues with GRUB and how to resolve them...</p>
                `
            }
        ]
    },
    {
        id: 'cloud-networking',
        name: 'Cloud & Networking',
        articles: [
            {
                id: 'azure-front-door',
                title: 'Azure Front Door: Complete Guide',
                category: 'cloud-networking',
                date: '2024-05-10',
                author: 'Héctor Adán',
                views: 12000,
                readTime: 18,
                language: 'EN',
                originalLanguage: 'ES',
                domain: 'Cloud & Networking',
                concepts: ['Azure', 'Networking', 'CDN'],
                subtitles: [
                    { id: 'azure-intro', text: 'Introduction to Azure Front Door' },
                    { id: 'azure-security', text: 'Security Posture Analysis' },
                    { id: 'azure-performance', text: 'Performance Optimization' }
                ],
                content: `
                    <h2 id="azure-intro">Introduction to Azure Front Door</h2>
                    <p>Azure Front Door is Microsoft's global entry point...</p>
                    
                    <h2 id="azure-security">Security Posture Analysis</h2>
                    <p>Understanding security in Azure Front Door...</p>
                    
                    <h2 id="azure-performance">Performance Optimization</h2>
                    <p>Best practices for optimizing performance...</p>
                `
            }
        ]
    },
    {
        id: 'software-architecture',
        name: 'Software Architecture',
        articles: [
            {
                id: 'clean-architecture',
                title: 'Clean Architecture Principles',
                category: 'software-architecture',
                date: '2024-04-01',
                author: 'Héctor Adán',
                views: 9500,
                readTime: 12,
                language: 'EN',
                originalLanguage: 'ES',
                domain: 'Software Architecture',
                concepts: ['Architecture', 'Design Patterns', 'Clean Code'],
                subtitles: [
                    { id: 'clean-principles', text: 'Core Principles' },
                    { id: 'clean-layers', text: 'Architectural Layers' },
                    { id: 'clean-implementation', text: 'Implementation Guidelines' }
                ],
                content: `
                    <h2 id="clean-principles">Core Principles</h2>
                    <p>Clean Architecture is based on several key principles...</p>
                    
                    <h2 id="clean-layers">Architectural Layers</h2>
                    <p>Understanding the layers in Clean Architecture...</p>
                    
                    <h2 id="clean-implementation">Implementation Guidelines</h2>
                    <p>How to implement Clean Architecture in your projects...</p>
                `
            }
        ]
    }
];

// Get all articles flattened
export function getAllArticles() {
    return categories.flatMap(category => 
        category.articles.map(article => ({
            ...article,
            categoryName: category.name
        }))
    );
}

// Get article by ID
export function getArticleById(id) {
    for (const category of categories) {
        const article = category.articles.find(a => a.id === id);
        if (article) {
            return { ...article, categoryName: category.name };
        }
    }
    return null;
}

// Get category by ID
export function getCategoryById(id) {
    return categories.find(cat => cat.id === id);
}
