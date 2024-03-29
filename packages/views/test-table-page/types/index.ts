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

export interface FormItemData {
    name: string;
    showLabel: string;
    input: string;
    textarea: string;
    inputNumber: string;
    autoInput: string;
    select: string;
    switch: string;
    selectTree: string;
    datetime: string;
    date: string;
    week: string;
    month: string;
    year: string;
    datetimerange: string;
    daterange: string;
    monthrange: string;
    rate: string;
    checkbox: string;
    radio: string;
    radioButton: string;
    cascader: string;
}

interface OperationType {
    code: string;
    name: string;
}
