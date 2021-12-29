import { Meta, Image } from 'types/sharedTypes';

interface BlogAttributes {
  content: string;
  title: string;
  headerImage: Image;
}

interface BlogPost {
  id: number;
  attributes: BlogAttributes;
}

export interface BlogPostResponse {
  data: BlogPost[];
  meta: Meta;
}
