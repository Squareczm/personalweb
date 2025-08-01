import { Post } from '@/types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: '深度学习在自然语言处理中的最新进展',
    slug: 'deep-learning-nlp-progress',
    content: '# 深度学习在自然语言处理中的最新进展\n\n近年来，深度学习技术在自然语言处理领域取得了突破性进展...',
    excerpt: '本文将深入探讨深度学习在自然语言处理领域的最新发展，包括Transformer架构、预训练模型等前沿技术。',
    category: 'AI',
    tags: ['深度学习', 'NLP', 'AI'],
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readingTime: 8,
    published: true,
  },
  {
    id: '2',
    title: '我的2024年学习计划：从零到全栈开发者',
    slug: 'my-2024-learning-plan',
    content: '# 我的2024年学习计划\n\n作为一名程序员，持续学习是保持竞争力的关键...',
    excerpt: '分享我的2024年技术学习路线图，包括前端、后端、数据库等各个方面的学习计划和目标。',
    category: 'Nova',
    tags: ['学习计划', '编程', '成长'],
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readingTime: 6,
    published: true,
  },
  {
    id: '3',
    title: '雪山徒步：在自然中寻找内心的平静',
    slug: 'mountain-hiking-peace',
    content: '# 雪山徒步\n\n在这个快节奏的时代，我们常常忘记了停下来...',
    excerpt: '记录一次难忘的雪山徒步经历，在壮丽的自然景观中，重新找回内心的宁静与力量。',
    category: 'Life',
    tags: ['旅行', '自然', '感悟'],
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    featuredImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readingTime: 5,
    published: true,
  },
  {
    id: '4',
    title: 'Next.js 15 新特性详解',
    slug: 'nextjs-15-features',
    content: '# Next.js 15 新特性详解\n\nNext.js 15 带来了许多激动人心的新特性...',
    excerpt: '全面解析 Next.js 15 的最新特性，包括 App Router 的改进、服务器组件的优化等。',
    category: 'AI',
    tags: ['Next.js', 'React', '前端'],
    publishedAt: new Date('2023-12-28'),
    updatedAt: new Date('2023-12-28'),
    featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readingTime: 10,
    published: true,
  },
];