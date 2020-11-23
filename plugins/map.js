import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps,  {
	load: {
		key:'AIzaSyD1G_gFPL4oxzdIA3RW_2kITB3l1JmgjXk',
		libraries: 'places'
	}
})
