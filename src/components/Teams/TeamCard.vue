<template>
  <div
    class="carousel-item flex flex-col pt-10 m-2 mx-5 pl-2 lg:mx-8 w-auto transform"
  >
    <router-link
      :to="{
        name: 'DriverBattle',
        params: { ...team.Constructor },
        query: { team: team.Constructor.constructorId },
      }"
    >
      <div class="pl-4 w-64 flex justify-center relative">
        <!-- <img
        class="w-40 absolute -top-14 z-10"
        :src="
          team.Circuit.circuitId === 'bahrain' ? this.trackImage.bahrain : ''
        "
        alt=""
      /> -->
      </div>

      <div
        class="team-card w-72 lg:w-96 h-96 lg:h-30rem rounded-lg flex flex-col p-4"
        :style="{
          'background-image':
            team.Constructor.constructorId === 'red_bull'
              ? this.red_bull
              : team.Constructor.constructorId === 'mercedes'
              ? this.mercedes
              : team.Constructor.constructorId === 'ferrari'
              ? this.ferrari
              : team.Constructor.constructorId === 'mclaren'
              ? this.mclaren
              : team.Constructor.constructorId === 'alphatauri'
              ? this.alphatauri
              : team.Constructor.constructorId === 'alpine'
              ? this.alpine
              : team.Constructor.constructorId === 'aston_martin'
              ? this.aston_martin
              : team.Constructor.constructorId === 'williams'
              ? this.williams
              : team.Constructor.constructorId === 'alfa'
              ? this.alfa
              : team.Constructor.constructorId === 'haas'
              ? this.haas
              : '',
        }"
      >
        <div class="flex flex-col p-2 mt-10">
          <h2 class="font-boldHeadline text-white uppercase text-lg">
            {{ team.Constructor.name }}
          </h2>
          <!-- <h2 class="font-boldHeadline text-sm text-white">
          {{ team.points }}
        </h2>
        <p class="text-gray-300 font-boldHeadline text-xs">
          {{ team.position }}
        </p> -->
        </div>
        <div
          class="flex flex-col text-white font-headline text-xs h-full justify-center pb-10"
        >
          <!-- <div class="flex justify-between">
          <p>Max Verstappen</p>
          <p class="font-boldHeadline">1st</p>
        </div>
        <div class="flex justify-between">
          <p>Lewis Hamilton</p>
          <p class="font-boldHeadline">2nd</p>
        </div>
        <div class="flex justify-between">
          <p>Carlos Sainz</p>
          <p class="font-boldHeadline">3rd</p>
        </div> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red_bull:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.00001)),url(https://external-preview.redd.it/9_Wx7_1p5QD-YJpE_wIbxNsxFFgvQ2IkYSjyNnXVUjk.jpg?auto=webp&s=f32e9434bc52530c4f542d0f03fe9272da2cfe9b)',
      mercedes:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://www.grandprix247.com/wp-content/uploads/2021/12/mercedes-f1-team-2021.jpg)',
      ferrari:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/AbuDhabi_2019/Post/XPB_1024633_HiRes.jpg)',
      mclaren:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://media-cdn.mclaren.com/media/images/articles/hero/mcl_GP2122_091913EDIT_56I7762.jpg)',
      alphatauri:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://preview.redd.it/q7pqst0q6uj61.jpg?auto=webp&s=5593969dfcff39a29dbb6d030d1bb4d49e370aac)',
      alfa: 'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://f1i.com/wp-content/uploads/2020/12/alfa-romeo.jpg)',
      williams:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://c8.alamy.com/comp/2FTF17Y/monte-carlo-monaco-21st-may-2021-l-to-r-nicholas-latifi-cdn-williams-racing-and-george-russell-gbr-williams-racing-at-a-team-photograph-celebrating-750-grand-prix-for-the-team-monaco-grand-prix-friday-21st-may-2021-monte-carlo-monaco-credit-james-moyalamy-live-news-2FTF17Y.jpg)',
      haas: 'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://pbs.twimg.com/media/FGO28j-XsAUK6GR?format=jpg&name=4096x4096)',
      alpine:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/183811827_4647460225280948_3628763664311421842_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=G5gK1tteFXgAX906kYk&_nc_ht=scontent-lhr8-1.xx&oh=00_AT9hzpwmQ0Hez6xaBzMNwhTFuQqo5-M50vCKe58AFBFXcA&oe=61DD2473)',
      aston_martin:
        'linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(https://pbs.twimg.com/profile_banners/16143542/1639390604/1500x500)',
    };
  },
  props: ['team'],
};
</script>

<style scoped>
.team-card {
  position: relative;
  display: flex;
  /* background-image: v-bind(race) linear-gradient(); */
  background-image: linear-gradient(
    rgba(1, 1, 1, 0.55),
    rgba(255, 255, 255, 0.3)
  );
  /* url(https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789 */
</style>
<!-- https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi.png.transform/2col-retina/image.png -->
