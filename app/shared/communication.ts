export * from './communication/IsoDashInit';
export * from './communication/Data';
export * from './communication/CommunicationEvent';

import {CommunicationEvent} from './communication/CommunicationEvent';

export interface Communication {
    new(...args: any[]): CommunicationEvent;
}