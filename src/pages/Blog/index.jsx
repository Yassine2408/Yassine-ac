import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import {
  BlogContainer,
  BlogGrid,
  BlogCard,
  BlogDate,
  BlogTitle,
  BlogExcerpt,
  ReadMore
} from './styles';

const Blog = () => {
  return (
    <BlogContainer>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h1>
      
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogDate>{post.date}</BlogDate>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <ReadMore>Read More →</ReadMore>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 