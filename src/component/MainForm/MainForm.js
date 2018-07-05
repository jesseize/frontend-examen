import DropDown from '../DropDown/DropDown';

export default {
  name: 'MainForm',
  components: {
    DropDown,
  },
  data() {
    return {
      fullName: null,
      birthday: null,
      keuzevak: null,
      diplomaBehaald: null,
      opleiding: this.getOpleiding(),
      overgangsbewijs_from: null,
      overgangsbewijs_to: null,
      anders: null,
      toelichting: null,
      andereZorg: null,
      naam: null,
    };
  },
  computed: {
    getOpleiding() {
      const getOpleiding = this.$store.state.form.opleiding;
      return getOpleiding;
    },
  },
};
