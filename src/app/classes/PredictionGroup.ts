export interface IPredictionGroup {
    message: string;
    success: boolean;
    data: any;
}

export class PredictionGroup implements IPredictionGroup {
    message: string;
    success: boolean;
    data: any;
}