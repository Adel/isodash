import {Service} from "./annotation/Service";
import {MySrv} from "./MySrv";

@Service({token: MySrv, multi: true})
export class Service2 implements MySrv {
    methode() {
        console.log('Service2:methode');
    }
}