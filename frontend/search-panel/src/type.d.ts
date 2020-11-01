export interface ExportData {
  id: number;
  billno: number;
  product: string;
  indiancompany: string;
  foreigncompany: string;
}

export interface ProductData {
  id: number;
  billno: number;
  number_4digit: number;
  date: string;
  hscode: number;
  product: string;
  quantity: number;
  unit: string;
  item_rate_inv: number;
  currency: string;
  total_amount_inv_fc: int;
  fob_inr: number;
  foreignport: string;
  foreigncountry: string;
  indianport: string;
  iec: number;
  indiancompany: string;
  address1: string;
  address2: string;
  city: string;
  foreigncompany: string;
  invoice_no: string;
  cush: string;
  iec_pin: string;
  item_no: number;
  item_rate_inr: number;
}

export interface SearchParams {
  keyword: string;
  chocie: string;
  page: number;
}
