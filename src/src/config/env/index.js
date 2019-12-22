import { envConfig as local } from "./local";
import { envConfig as dev } from "./dev";
import { envConfig as prod } from "./prod";

export function environment() {
    const hostname = window && window.location && window.location.hostname;

    if (hostname.startsWith('devapp')) {
        return dev;
    }
    else if (hostname.startsWith('app')) {
        return prod;
    }
    else {
        return local;
    }
}
