
import {DialogProps} from 'element-plus'

export interface RewriteDialogProps extends Partial<DialogProps> {
    customDrag?: boolean;
    height?: number | string;
    size?: 'large' | 'small' | 'medium' | '';
}

export interface GETWH {
    width?: RewriteDialogProps['width'];
    height?: RewriteDialogProps['height'];
}
