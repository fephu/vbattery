export interface Equipment {
  ten_thiet_bi: string;
  slug: string;
}

export interface Product {
  _id: string;
  ten_san_pham: string;
  slug: string;
  ma_san_pham: string;
  diep_ap: string;
  dung_luong: string;
  kich_thuoc: string;
  mau_sac: string;
  trong_luong: string;
  xuat_xu: string;
  gia_san_pham: number;
  hinh_anh: string[];
  thiet_bi_su_dung: Equipment[];
}

export type PaginateProductType = {
  products: Product[];
  page_id: number;
  total_product: number;
  total_pages: number;
};

export interface Banner {
  image_url: string;
  link_url: string;
  title: string;
  position: number;
}
