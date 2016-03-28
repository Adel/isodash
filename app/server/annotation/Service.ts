import {Injector, provide, Type} from "angular2/core";

let clazz: Array<any> = [];
let injector: Injector;

export interface Application {
    start(): any;
}

export function start(application: Application) {
    clazz.push(application);
    injector = Injector.resolveAndCreate(clazz);
    injector.get(application).start();
}

export interface ServiceParams {
    token: Type;
}

export function Service(serviceParams?: ServiceParams) {
    return (target: any) => {
        if(serviceParams) {
            clazz.push(provide(serviceParams.token, {useClass: target, multi: true}));
        } else {
            clazz.push(target);
        }
        return target;
    }
}