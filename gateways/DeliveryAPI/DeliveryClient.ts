import LocalStorageClient from '../LocalStorageClient';
import Delivery, { DeliveryType } from '../../models/Delivery';
import { DeliveryValues } from '../../components/deliveryForm/deliveryFormFormikProps';

const { get, set } = LocalStorageClient<Array<DeliveryType>>();
const DELIVERY_KEY = 'deliveries';

type DeliveryClientType = {
  getAll(): Array<Delivery>;
  create(newDelivery: DeliveryValues): Promise<Delivery>;
  update(orderId: string, newDelivery: DeliveryValues): Promise<Delivery>;
  remove(orderId: string): Promise<void>;
  getOne(orderId: string): Delivery | undefined;
}

const DeliveriesClient: DeliveryClientType = {
  getAll() {
    const rawDeliveryList = get(DELIVERY_KEY) || [];

    return rawDeliveryList.map((rawDelivery) => Delivery.createFromRaw(rawDelivery));
  },
  getOne(orderId) {
    const rawDeliveryList = get(DELIVERY_KEY) || [];
    const foundDelivery = rawDeliveryList.find((delivery) => orderId = delivery.orderId);

    return foundDelivery ? Delivery.createFromRaw(foundDelivery) : undefined;
  },
  async create(newDelivery) {
    const rawDeliveryList = get(DELIVERY_KEY) || [];
    const foundDelivery = rawDeliveryList.find((delivery) => newDelivery.orderId === delivery.orderId);
    if (foundDelivery) return Promise.reject('Order Id found.');

    const updatedList = [{ ...newDelivery, created: Date.now() }, ...rawDeliveryList];

    set(DELIVERY_KEY, updatedList);

    return Delivery.createFromRaw(newDelivery);
  },
  async update(orderId, rawDelivery) {
    const rawDeliveryList = get(DELIVERY_KEY) || [];
    const foundDelivery = rawDeliveryList.find((delivery) => orderId === delivery.orderId);
    if (!foundDelivery) return Promise.reject('Order Id not found.');

    const updatedList = [rawDelivery, ...rawDeliveryList.filter((delivery) => orderId !== delivery.orderId)];

    set(DELIVERY_KEY, updatedList);

    return Delivery.createFromRaw(rawDelivery);
  },
  async remove(orderId) {
    const rawDeliveryList = get(DELIVERY_KEY) || [];
    const foundDelivery = rawDeliveryList.find((delivery) => orderId === delivery.orderId);
    if (!foundDelivery) return Promise.reject('Order Id not found.');

    const updatedList = rawDeliveryList.filter((delivery) => orderId !== delivery.orderId);

    set(DELIVERY_KEY, updatedList);
  }
}

export default DeliveriesClient;
