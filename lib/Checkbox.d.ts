import * as React from 'react';
interface Props {
    attributesWrapper?: object;
    attributesInput?: object;
    value?: string | boolean;
    checked?: boolean;
    disabled?: boolean;
    labelHtml?: React.ReactNode;
    validate?: boolean;
    onChange: (res: boolean, e: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    validationOption?: object;
    asyncMsgObj?: object;
    classNameInput?: string;
    classNameWrapper?: string;
    classNameInputBox?: string;
    classNameContainer?: string;
    customStyleInput?: object;
    customStyleWrapper?: object;
    customStyleContainer?: object;
    customStyleInputBox?: object;
    validationCallback?: (res: boolean) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
