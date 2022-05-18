// Vue imports
import { createApp } from 'vue';
import App from './index.vue';
import router from '@/routes';
import jQuery from 'jquery';

// Third-party imports (Not Vue Packages)
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";

// Component imports
import index from "@/index";
import navbar from "@/components/nav/navbar";

// App Creation
const app = createApp(App);

// Global Components
app.component('index', index);
app.component('nav', navbar);
app.component('font-awesome-icon', FontAwesomeIcon);

// Icon Library Elements
library.add(fas, far, fab)
dom.watch();

// App Elements
window.$ = jQuery;

app
    .use( router )
    .mount('#app');