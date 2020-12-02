import * as React from 'react';
export declare const isValidValue: (list: OptionListItem[], value: any) => boolean;
interface OptionListItem {
    id: string;
    name: string;
}
interface AttributesInput {
}
interface Props {
    attributesWrapper: object;
    attributesInputs: AttributesInput[];
    value?: string | number;
    disabled?: boolean;
    validate?: boolean;
    optionList?: OptionListItem[];
    onChange: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    validationOption?: object;
    asyncMsgObj?: object;
    classNameWrapper?: string;
    classNameInput?: string;
    classNameContainer?: string;
    classNameOptionListItem?: string;
    customStyleWrapper?: object;
    customStyleContainer?: object;
    customStyleInput?: object;
    customStyleOptionListItem?: object;
    validationCallback?: (res: boolean) => void;
}
interface AttributesInput {
    id?: string;
}
interface OptionProps {
    checked?: boolean;
    id?: string;
    optionListItemClass?: string;
    labelClass?: string;
    inputClass?: string;
    value?: string | number;
    disabled?: boolean;
    item?: OptionListItem;
    customStyleOptionListItem?: object;
    customStyleInput?: object;
    attributesInput: AttributesInput;
    onChange?: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
}
export declare const Option: React.FC<OptionProps>;
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
