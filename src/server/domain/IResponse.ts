interface IMetaDataPagination {
  currentPage: number;
}

export interface IResponsePagination {
  data: Array<any>;
  metaData: IMetaDataPagination;
}
