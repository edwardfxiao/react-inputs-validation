import Textbox from './Textbox.js';
import Textarea from './Textarea.js';
import Radiobox from './Radiobox.js';
import Checkbox from './Checkbox.js';
import Select from './Select.js';
if (typeof window !== 'undefined') {
  window.Textbox = Textbox;
  window.Textarea = Textarea;
  window.Radiobox = Radiobox;
  window.Checkbox = Checkbox;
  window.Select = Select;
}
export { Textbox, Textarea, Radiobox, Checkbox, Select };
