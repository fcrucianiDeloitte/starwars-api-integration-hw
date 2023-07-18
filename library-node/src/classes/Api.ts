import { Param, IReqAdapter } from "../interfaces/IReqAdapter";
import { ApiFactory } from "./ApiFactory";

type Response<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

abstract class Api<T> {
  baseUrl: string;
  adapter: IReqAdapter<T>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.adapter = ApiFactory.getApiAdapter<T>();
  }
}

class ApiGet<T> extends Api<Response<T>> {
  next: string | null = null;
  previous: string | null = null;
  totalCount: number = 0;

  getData = async (page: number): Promise<T[]> => {
    const url = `${this.baseUrl}/?page=${page}`;
    const params: Param = { url };
    const request = await this.adapter.createGetRequest(params);
    const results = request.results;
    this.next = request.next ? request.next.split("/").pop() : null;
    this.previous = request.previous ? request.previous.split("/").pop() : null;
    this.totalCount = request.count;

    return results;
  };

  searchData = async (x: string): Promise<T[]> => {
    const url = `${this.baseUrl}/?search=${x}`;
    const params: Param = { url };
    const request = await this.adapter.createGetRequest(params);
    const results = request.results;
    this.next = request.next ? request.next.split("/").pop() : null;
    this.previous = request.previous ? request.previous.split("/").pop() : null;
    this.totalCount = request.count;

    return results;
  };
}

class ApiGetSpecific<T> extends Api<T> {
  getData = async (id: string): Promise<T> => {
    const url = `${this.baseUrl}/${id}`;
    const params: Param = { url };
    const request = await this.adapter.createGetRequest(params);
    return request;
  };
}

// Design Pattern: Template Method
export { ApiGet, ApiGetSpecific };
