
import {DrawerProps} from 'element-plus'

export interface RewriteDrawerProps extends Partial<DrawerProps> {
    customDrag?: boolean;
    height?: number | string;
    size?: 'large' | 'small' | 'medium' | '';
}

export interface GETWHDrawer {
    width?: RewriteDrawerProps['width'];
    height?: RewriteDrawerProps['height'];
}
