import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tagMap = new Map<string, { name: string; id: string }>();
    
    posts.forEach((post) => {
        const postTags = Array.isArray(post.data.tags) ? post.data.tags : [post.data.tags];
        postTags.forEach((tag) => {
            if (tag && typeof tag === 'string') {
                const name = tag.trim();
                // 使用 name 作为 id，但将其转换为 URL 友好的格式
                const id = name.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '');
                
                tagMap.set(name, { name, id: id || name });
            }
        });
    });
    
    return Array.from(tagMap.values());
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagName: string) {
    return posts.filter((post) => {
        const postTags = Array.isArray(post.data.tags) ? post.data.tags : [post.data.tags];
        return postTags.some(tag => tag && tag.trim() === tagName);
    });
}
