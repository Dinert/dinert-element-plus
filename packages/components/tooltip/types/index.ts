import type {ElTooltipContentProps} from 'element-plus'

export interface DinertTooltipProps {
    options?: Partial<ElTooltipContentProps>;
    item?: {
        type?: string;
        options?: {
            options?: any[];
        };
    };
}
