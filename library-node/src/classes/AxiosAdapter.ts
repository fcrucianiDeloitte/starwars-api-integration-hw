import { IReqAdapter, Param } from "../interfaces/IReqAdapter";
import { http } from "../lib/axios/http";

class AxiosAdapter<T> implements IReqAdapter<T> {
  createGetRequest = async (params: Param): Promise<T | null> => {
    const axiosRequest = await http.get<T>(params.url);

    if (axiosRequest.status == 200 && axiosRequest.data) {
      return axiosRequest.data;
    } else {
      return null;
    }
  };
}

export { AxiosAdapter };
