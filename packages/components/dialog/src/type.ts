
import type {DialogProps} from 'element-plus'

export interface RewriteDialogProps extends Partial<DialogProps> {
    size?: string;
    height?: number | string;
    showFull?: boolean;
    customDrag?: boolean;
    explain?: string;
    boxShadow?: boolean;
    fullscreen?: boolean;
    style?: object;
}

export interface GETWH {
    width?: RewriteDialogProps['width'];
    height?: RewriteDialogProps['height'];
}
