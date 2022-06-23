const RootComponent = {
  data() {
    return {
      salaireAnnuelBrut: 0,
    };
  },

  computed: {
    salaireMensuelBrut: function () {
      return this.salaireAnnuelBrut / 12;
    },
    salaireAnnuelNet: function () {
      return this.salaireAnnuelBrut * 0.78;
    },
    salaireMensuelNet: function () {
      return this.salaireAnnuelNet / 12;
    },
  },

  methods: {
    editAnnuel(e) {
      this.salaireAnnuelBrut = e.target.value;
    },
  },
};

Vue.createApp(RootComponent).mount("#tableau");
