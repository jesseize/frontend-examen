import { FormMutationTypes } from '../../store/module/form';

export default {
  name: 'DropDown',
  data() {
    return {
      open: false,
      selected: this.name.replace('-', ' '),
      value: null,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleDropdown() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
    selectOption(value, text) {
      this.value = value;
      this.selected = text;
      this.open = false;
      if (this.name === 'opleiding') {
        this.$store.commit(FormMutationTypes.SET_OPLEIDING, this.value);
      }
    },
  },
};
