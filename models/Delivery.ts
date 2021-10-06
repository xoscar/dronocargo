import { Record } from 'immutable';

export enum StatusEnum {
  ready = 'Ready',
}

export enum PlatformEnum {
  tetha = 'tetha',
}

export enum TechnicalStatusEnum {
  passed = 'passed',
  failed = 'failed',
  pending = 'pending',
}

export type DeliveryType = {
  orderId: string;
  technician: string;
  droneId: string;
  status: string;
  platform?: string;
  technicalStatus?: string;
  created: number;
  search?: Array<string>;
};

export const defaultValues = {
  orderId: '',
  technician: '',
  droneId: '',
  status: StatusEnum.ready,
  platform: undefined,
  technicalStatus: TechnicalStatusEnum.pending,
  created: Date.now(),
  search: [],
};

class Delivery extends Record<DeliveryType>(defaultValues) {
  static createFromRaw(rawDelivery: DeliveryType): Delivery {
    const { technician, orderId, droneId, status, technicalStatus, platform } = rawDelivery || {};
    const search = [technician, orderId, droneId, status, technicalStatus as string, platform as string];

    return new this({ technician, orderId, droneId, status, technicalStatus, platform, search });
  }

  matchSearch(regex: RegExp): boolean {
    return !!this.search?.find((word) => regex.test(word));
  }
}

export default Delivery;
