<template>
  <div class="flex flex-col mt-4 p-1 text-gray-400 text-sm">
    <div class="flex w-full justify-between m-1">
      <p>Championship Standing</p>
      <p class="text-white font-bold">20</p>
    </div>
    <div class="flex w-full justify-between m-1">
      <p>Team</p>
      <p class="text-white font-bold">Alfa Romeo Racing</p>
    </div>
    <div class="flex w-full justify-between m-1">
      <p>Podiums</p>
      <p class="text-white font-bold">12</p>
    </div>
    <div class="flex w-full justify-between m-1">
      <p>Age</p>
      <p class="text-white font-bold">{{ driverAge }}</p>
    </div>
    <div class="flex w-full justify-between m-1">
      <p>Place of Birth</p>
      <p class="text-white font-bold">Kraków, Poland</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      driverBirthday: '07 December 1984 00:00:00 GMT',
      driverAge: '',
    };
  },
  methods: {
    calculateAge(driverBirthday) {
      var date = Date.parse(this.driverBirthday);
      var diff = Date.now() - date;
      var age = new Date(diff);
      this.driverAge = Math.abs(age.getUTCFullYear() - 1970);
      console.log(this.driverAge, ' drivers age');
    },
  },
  created() {
    this.calculateAge();
  },
};
</script>

<style></style>
