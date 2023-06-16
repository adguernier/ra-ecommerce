import { ResourceProps } from "react-admin";
import { InvoiceList } from "./InvoiceList";
import { InvoiceShow } from "./InvoiceShow";

export const invoice: Partial<ResourceProps> = {
  list: InvoiceList,
  show: InvoiceShow,
};
