export interface ProductModelServer {
  masanpham: Number;
  tensanpham: String;
  gia: Number;
  soluong: Number;
  hinhminhhoa: String;
  hinhchitiet: String;
  mota: String;
  maloaisp: Number;
  tenloaisp: String;
}
export interface serverResponse  {
  count: number;
  products: ProductModelServer[];
};
