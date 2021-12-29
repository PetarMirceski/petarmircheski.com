export const routes = {
  blog: {
    findOne: `/blogs/:id`,
    find: (query: string = '') => `/blogs?${query}`,
  },
};
