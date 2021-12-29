import { apiInstance } from 'lib/api/api';
import { routes } from 'constants/routes';
import { config } from 'constants/config';
import qs from 'qs';
import { BlogPostResponse } from 'types/blog';

export const fetchPaginatedBlog = async (page: number = 1) => {
  const query = qs.stringify(
    {
      pagination: {
        page: page,
        pageSize: config.pageSize,
      },
      populate: ['headerImage'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  return await apiInstance.get<BlogPostResponse>(routes.blog.find(query));
};
