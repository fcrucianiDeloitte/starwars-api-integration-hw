type Param = {
  url: string;
};

interface IReqAdapter<T> {
  createGetRequest(params: Param): Promise<T | null>;
}

export type { Param };
export type { IReqAdapter };
