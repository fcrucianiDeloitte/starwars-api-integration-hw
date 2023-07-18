import { IReqAdapter } from "../interfaces/IReqAdapter";
import { AxiosAdapter } from "./AxiosAdapter";

class ApiFactory {
    static getApiAdapter<T>(): IReqAdapter<T> {
        return new AxiosAdapter<T>();
    }
}

// Design pattern: Factory Method
export {ApiFactory}