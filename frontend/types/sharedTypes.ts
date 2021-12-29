interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  meta: PaginationMeta;
}

interface ImageData {
  name: string;
  height: number;
  width: number;
  url: string;
  createdAt: Date;
}
export interface Image {
  data: { attributes: ImageData; id: number };
}
