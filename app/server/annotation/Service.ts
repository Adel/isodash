import {Injector} from "angular2/core";
import {provide} from "angular2/core";
import {Type} from "angular2/core";

let clazz: Array<any> = [];
let injector;

export abstract class Application {
    abstract start(): any;
}

export function start(application: typeof Application) {
    clazz.push(application);
    injector = Injector.resolveAndCreate(clazz);
    injector.get(application).start();
}

export function Service({token, multi}:{token?:Type, multi?: boolean}) {
    return (target: any) => {
        if(multi && token) {
            clazz.push(provide(token, {useClass: target, multi: true}));
        } else {
            clazz.push(target);
        }
        return target;
    }
}