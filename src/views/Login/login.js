import FloatLabel from "primevue/floatlabel";
import InputGroup from "primevue/inputgroup";

export default {
  name: "login",
  components: {
    FloatLabel,
    InputGroup,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    test() {
      console.log(this.email, this.password);
    },
  },
};
