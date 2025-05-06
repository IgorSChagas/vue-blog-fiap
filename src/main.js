import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import PrimeVue from "primevue/config";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Aura from "@primeuix/themes/aura";

import "./style.css";

const app = createApp(App);

app.use(router);
app
	.use(PrimeVue, {
		theme: {
			preset: Aura,
		},
	})
	.mount("#app");

app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
