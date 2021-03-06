import { FieldType } from "./enum";
import {FieldLabel} from "./FieldLabel"

export interface Field{
    name: string,
    label: FieldLabel;
    type: FieldType;
    value: string;
    render(): HTMLElement;
    getValue(): string;
}