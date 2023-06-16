import { ResourceProps } from "react-admin";
import { OrderList } from "./OrderList";

export * from "./BasketDetail";

export const order: Partial<ResourceProps> = {
  list: OrderList,
};
