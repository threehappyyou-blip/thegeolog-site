import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'TheGEOLog',
    description: 'A real, dated log of what actually broke (and got fixed) trying to stay visible to AI search.',
    site: context.site,
    stylesheet: '/rss-styles.xsl',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/log/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
