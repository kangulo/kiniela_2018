export interface IPrediction {
    message: string;
    success: boolean;
    data: any;
}

export class Prediction implements IPrediction {
    message: string;
    success: boolean;
    data: any;
}