import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';

createApp(App).use(store).use(router).mount('#app');

// Call this function when your app start
function OneSignalInit() {
  // Uncomment to set OneSignal device logging to VERBOSE
  // window.plugins.OneSignal.setLogLevel(6, 0);

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  window['plugins'].OneSignal.setAppId('3a50a636-631d-4451-afb5-a5cdad4b4282');
  window['plugins'].OneSignal.setNotificationOpenedHandler(function (jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  // iOS - Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  window['plugins'].OneSignal.promptForPushNotificationsWithUserResponse(
    function (accepted) {
      console.log('User accepted notifications: ' + accepted);
    }
  );
}
document.addEventListener('deviceready', OneSignalInit, false);
