import * as React from 'react';
interface AttributesInputObj {
    id?: string;
    maxLength?: number;
}
interface Props {
    attributesWrapper?: object;
    attributesInput?: AttributesInputObj;
    value?: string;
    label?: string;
    disabled?: boolean;
    validate?: boolean;
    classNameInput?: string;
    classNameWrapper?: string;
    classNameContainer?: string;
    customStyleInput?: object;
    customStyleWrapper?: object;
    customStyleContainer?: object;
    validationOption?: object;
    asyncMsgObj?: object;
    onChange: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
    validationCallback?: (res: boolean) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
