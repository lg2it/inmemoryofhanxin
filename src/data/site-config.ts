export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'In Memory of Hanxin',
    subtitle: '涸河——无尽的追思',
    description: 'A memorial website for Hanxin, a beloved friend and colleague.',
    image: {
        src: '/post-6.jpg',
        alt: 'In Memory of Hanxin'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Album',
            href: '/projects'
        },
        {
            text: 'Tags',
            href: '/tags'}
    ],
    footerNavLinks: [
        {
            text: 'Commemoration',
            href: '/commemoration'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Copyright',
            href: '/copyright'
        }
    ],
    hero: {
        title: '序言',
        text: "2025 年 2 月 11 日，我们挚爱的朋友——晗昕——悄然离开了这个世界，踏上了通往永恒的旅程。这一天，天空格外地沉默。</br>他的离去是如此突然，犹如冬日里一片无声飘落的雪花。在这个数字化的时代，他的博客、域名等数字足迹，如同散落在云端的星辰，未及交付便成为了无法触及的思念。</br>怀着对挚友无尽的追思，在获得他父亲的支持后，我们建立了这个永恒的回忆之所。这里，将成为承载他生命印记的港湾。</br>与许多同样深爱着他的朋友们一起，我们如同拾珍珠般，小心翼翼地收集着晗昕生前留下的每一篇文章，每一帧照片。正如他生前所说的那句令人泪目的话：「在我离开的时候，文字会代替我的心脏继续跳动。」</br>是的，亲爱的晗昕，你的文字依然跳动着，在这里，在我们的心里，永远鲜活如初。",
        image: {
            src: '/post-6.jpg',
            alt: 'A Memorial Website for Hanxin'
        },
        actions: [
            {
                text: '晗昕自述',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
