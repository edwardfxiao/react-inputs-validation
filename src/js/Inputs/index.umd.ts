import Textbox from './Textbox';
import Textarea from './Textarea';
import Select from './Select';
import Checkbox from './Checkbox';
import Radiobox from './Radiobox';

if (typeof window !== 'undefined') {
  (<any>window).Textbox = Textbox;
  (<any>window).Textarea = Textarea;
  (<any>window).Radiobox = Radiobox;
  (<any>window).Checkbox = Checkbox;
  (<any>window).Select = Select;
}

export { Textbox, Textarea, Select, Checkbox, Radiobox };
