import { ref } from 'vue'

export const usePosts = () => {
  const posts = [
    {
      id: 1,
      title: 'UX review presentations',
      slug: 'ux-review-presentations',
      excerpt: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      image: 'https://placehold.co/592x228',
      date: '2024-01-01',
      tags: [
        { name: 'Design' },
        { name: 'Research' },
        { name: 'Presentation' }
      ]
    },
    {
      id: 2,
      title: 'Migrating to Linear 101',
      slug: 'migrating-to-linear-101',
      excerpt: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get...',
      image: 'https://placehold.co/320x200',
      date: '2024-01-02',
      tags: [
        { name: 'Design' },
        { name: 'Research' }
      ]
    },
    {
      id: 3,
      title: 'Building your API Stack',
      slug: 'building-your-api-stack',
      excerpt: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
      image: 'https://placehold.co/320x200',
      date: '2024-01-03',
      tags: [
        { name: 'Design' },
        { name: 'Research' }
      ]
    }
  ];

  return {
    posts,
    recentPosts: posts.slice(0, 3)
  }
}