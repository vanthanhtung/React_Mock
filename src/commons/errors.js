import { message } from 'antd';
import intl from 'react-intl-universal';

export function handleError(messageError) {
    return message.error(intl.get(`error.${messageError}`) || messageError);
}