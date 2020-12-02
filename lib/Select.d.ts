import * as React from 'react';
export declare const isValidValue: (list: OptionListItem[], value: any) => boolean;
export declare const getItem: (list: OptionListItem[], value: any) => OptionListItem;
export declare const getIndex: (list: OptionListItem[], value: string) => number;
interface OptionListItem {
    id: string;
    name: string;
}
interface Props {
    attributesWrapper?: object;
    attributesInput?: object;
    value?: string | number;
    disabled?: boolean;
    validate?: boolean;
    showSearch?: boolean;
    showArrow?: boolean;
    keyword?: string;
    optionList: OptionListItem[];
    onChange: (res: object, e: React.MouseEvent<HTMLElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLElement> | Event) => void;
    onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    validationOption?: object;
    asyncMsgObj?: object;
    classNameWrapper?: string;
    classNameContainer?: string;
    classNameSelect?: string;
    classNameOptionListContainer?: string;
    classNameDropdownIconOptionListItem?: string;
    classNameOptionListItem?: string;
    customStyleWrapper?: object;
    customStyleContainer?: object;
    customStyleSelect?: object;
    customStyleOptionListContainer?: object;
    customStyleDropdownIcon?: object;
    customStyleOptionListItem?: object;
    validationCallback?: (res: boolean) => void;
}
interface OptionProps {
    index?: number;
    id?: string;
    className?: string;
    item?: OptionListItem;
    customStyleOptionListItem?: object;
    onClick?: (res: object, e: React.MouseEvent<HTMLElement>) => void;
    onMouseOver?: (res: number) => void;
    onMouseMove?: () => void;
    onMouseOut?: () => void;
}
export declare const Option: React.FC<OptionProps>;
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
