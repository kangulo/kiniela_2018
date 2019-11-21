export interface IListPredictions {
    message: string;
    success: boolean;
    data: any;
}
export class ListPredictions implements IListPredictions{
    message: string;
    success: boolean;
    data: any;
}