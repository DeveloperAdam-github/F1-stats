<template>
  <div
    class="h-14 md:h-16 lg:h-24 2xl:h-28 w-full rounded-md small-card flex rounded-br-full items-center carousel-item mt-4 lg:mt-5"
    :style="{
      'background-image':
        team.Constructor.constructorId === 'red_bull'
          ? this.backgroundImage.red_bull
          : team.Constructor.constructorId === 'mercedes'
          ? this.backgroundImage.mercedes
          : team.Constructor.constructorId === 'ferrari'
          ? this.backgroundImage.ferrari
          : team.Constructor.constructorId === 'mclaren'
          ? this.backgroundImage.mclaren
          : team.Constructor.constructorId === 'alphatauri'
          ? this.backgroundImage.alphatauri
          : team.Constructor.constructorId === 'alpine'
          ? this.backgroundImage.alpine
          : team.Constructor.constructorId === 'aston_martin'
          ? this.backgroundImage.aston_martin
          : team.Constructor.constructorId === 'williams'
          ? this.backgroundImage.williams
          : team.Constructor.constructorId === 'alfa'
          ? this.backgroundImage.alfa
          : team.Constructor.constructorId === 'haas'
          ? this.backgroundImage.haas
          : '',
    }"
  >
    <div
      class="card-line w-10 h-10 border-r-3 flex items-center justify-center text-white font-boldHeadline text-lg p-5"
      :style="{
        'border-color':
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
      <h3>{{ team.position }}</h3>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <p class="font-headline text-white">{{ team.Constructor.name }}</p>
    </div>
    <div
      class="w-16 h-full flex flex-col items-center justify-center text-white font-headline text-xs flash-card rounded-tr-md rounded-br-md transform -skew-x-12"
    >
      <p>{{ team.points }}</p>
      <p class="hidden sm:block text-xxs lg:text-xs">pts</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red_bull: '#0600ef',
      mercedes: '#00D2BE',
      ferrari: '#DC0000',
      mclaren: '#FF9800',
      alphatauri: '#2B4562',
      alfa: '#900000',
      haas: '#FFF',
      alpine: '#0090FF',
      aston_martin: '#006F62',
      williams: '#005AFF',
      backgroundImage: {
        red_bull:
          'linear-gradient(to bottom right,#0600ef, rgba(1, 1, 1, 0.9)), url(https://external-preview.redd.it/9_Wx7_1p5QD-YJpE_wIbxNsxFFgvQ2IkYSjyNnXVUjk.jpg?auto=webp&s=f32e9434bc52530c4f542d0f03fe9272da2cfe9b)',
        mercedes:
          'linear-gradient(to bottom right, #00D2BE, rgba(1,1,1,0.9)),url(https://www.grandprix247.com/wp-content/uploads/2021/12/mercedes-f1-team-2021.jpg)',
        ferrari:
          'linear-gradient(to bottom right, #DC0000, rgba(1,1,1,0.9)),url(https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/AbuDhabi_2019/Post/XPB_1024633_HiRes.jpg)',
        mclaren:
          'linear-gradient(to bottom right, #FF9800, rgba(1,1,1,0.9)),url(https://media-cdn.mclaren.com/media/images/articles/hero/mcl_GP2122_091913EDIT_56I7762.jpg)',
        alphatauri:
          'linear-gradient(to bottom right, #2B4562, rgba(1,1,1,0.9)),url(https://preview.redd.it/q7pqst0q6uj61.jpg?auto=webp&s=5593969dfcff39a29dbb6d030d1bb4d49e370aac)',
        alfa: 'linear-gradient(to bottom right, #900000, rgba(1,1,1,0.9)),url(https://f1i.com/wp-content/uploads/2020/12/alfa-romeo.jpg)',
        williams:
          'linear-gradient(to bottom right, #005AFF, rgba(1,1,1,0.9)),url(https://c8.alamy.com/comp/2FTF17Y/monte-carlo-monaco-21st-may-2021-l-to-r-nicholas-latifi-cdn-williams-racing-and-george-russell-gbr-williams-racing-at-a-team-photograph-celebrating-750-grand-prix-for-the-team-monaco-grand-prix-friday-21st-may-2021-monte-carlo-monaco-credit-james-moyalamy-live-news-2FTF17Y.jpg)',
        haas: 'linear-gradient(to bottom right, #ffff, rgba(1,1,1,0.9)),url(https://pbs.twimg.com/media/FGO28j-XsAUK6GR?format=jpg&name=4096x4096)',
        alpine:
          'linear-gradient(to bottom right, #0090FF, rgba(1,1,1,0.9)),url(https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/183811827_4647460225280948_3628763664311421842_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=G5gK1tteFXgAX906kYk&_nc_ht=scontent-lhr8-1.xx&oh=00_AT9hzpwmQ0Hez6xaBzMNwhTFuQqo5-M50vCKe58AFBFXcA&oe=61DD2473)',
        aston_martin:
          'linear-gradient(to bottom right, #006F62, rgba(1,1,1,0.9)),url(https://pbs.twimg.com/profile_banners/16143542/1639390604/1500x500)',
      },
    };
  },
  props: ['team'],
  methods: {
    whatTeam() {
      console.log(this.team);
    },
  },
  mounted() {
    this.whatTeam();
  },
};
</script>

<style>
.small-card {
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.3),
      rgba(1, 1, 1, 0.9)
    ),
    url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/4/20/cjfwx2fomovkyrd5w4sk/sergio-perez-emilia-eomagna-grand-prix-2021);
  background-size: cover;
  background-position: center;
}

.flash-card {
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.9),
    rgba(1, 1, 1, 0.9)
  );
}

.card-line {
  border-color: #0600ef;
}
</style>
