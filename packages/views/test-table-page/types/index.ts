export interface TableData {
    args: string;
    costTime: number;
    errorMsg: string;
    id: string;
    ip: string;
    operationDescription: string;
    operationObject: string;
    operationResult: string;
    operationType: OperationType;
    overTime: number;
    requestMethod: string;
    requestUrl: string;
    securityLevel: string;
    startTime: string;
    userId: string;
    userName: string;
}

interface OperationType {
    code: string;
    name: string;
}
