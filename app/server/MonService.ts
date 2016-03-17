import {Service} from "./annotation/Service";
import {MySrv} from "./MySrv";

@Service({token: MySrv, multi: true})
export class MonService implements MySrv {

    methode() {
        console.log('MonService:methode');
    }

}