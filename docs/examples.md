# Calc Example Gallery

<script setup>
  var ID = "123";
  var CALC_JSON = '[{"name":"InstaCalc: Row Interface Examples","url":57004},{"name":"InstaCalc: Time Shorthand","url":56740},{"name":"InstaCalc: Reference : Extra Features","url":50013},{"name":"InstaCalc: Excel Stats Functions","url":56789},{"name":"InstaCalc: Retirement Calculator","url":56207},{"name":"InstaCalc: Wolfram Compare","url":57433},{"name":"InstaCalc: Nearest Number","url":56833},{"name":"InstaCalc Beta Preview (Archive)","url":55977},{"name":"InstaCalc: Row Formatting","url":57432},{"name":"InstaCalc: Reference : Programming","url":50008},{"name":"InstaCalc: Reference : Scientific Calculations","url":50007},{"name":"InstaCalc: Number Formats","url":56777},{"name":"InstaCalc: Unit Conversions","url":50012},{"name":"InstaCalc: Excel Financial Functions","url":56788},{"name":"InstaCalc: Key Features","url":50005},{"name":"InstaCalc V2","url":56020},{"name":"InstaCalc: Reference: Basic Commands","url":57484},{"name":"InstaCalc: Reference: Variables and Rows","url":57485},{"name":"InstaCalc: Reference: Conversions","url":57486},{"name":"InstaCalc: Reference : Formatting","url":57487},{"name":"InstaCalc: Reference : Computer Units","url":57488},{"name":"InstaCalc: Reference : Date / Time","url":57489},{"name":"InstaCalc: Excel Compatibility Functions","url":57497},{"name":"InstaCalc: A Powerful, Fun Calculator","url":57627}]';

  var CALC_JSON_2 = '[{"name":"InstaCalc: Roman numerals","url":56716},{"name":"InstaCalc: Finance / Engineering Number Formats","url":56717},{"name":"InstaCalc: SI Unit Gauntlet","url":56724},{"name":"InstaCalc: Datetime Features","url":56747},{"name":"InstaCalc: Date & Time","url":56749},{"name":"InstaCalc: Fuzzier Conversions","url":56853},{"name":"InstaCalc: Rounding tests","url":56906},{"name":"InstaCalc: Scaled units","url":57370},{"name":"InstaCalc: Virtual Units","url":57394},{"name":"InstaCalc: Objects / Arrays","url":57570},{"name":"InstaCalc: Remote data loading","url":57572},{"name":"InstaCalc: Load Calc","url":57573},{"name":"InstaCalc: Construction Calculator","url":57628}, {"name":"Complex numbers", "url":58510}]'

import { ref, onMounted, computed } from 'vue';

const calcs = ref([]);
const selectedCalc = ref(null);

onMounted(() => {
	let calcs1 = JSON.parse(CALC_JSON);
	let calcs2 = JSON.parse(CALC_JSON_2);
  calcs.value = [...calcs1, ...calcs2];
});

const formattedCalcs = computed(() => {
  return calcs.value.map(calc => ({
    ...calc,
    displayName: calc.name.replace(/^instacalc:\s*/i, '')
  }));
});

const selectCalc = (calc) => {
  selectedCalc.value = calc;
};
</script>

<div v-if="selectedCalc">
  <h2>{{ selectedCalc.displayName }}</h2>
  <p>
    <a :href="`https://instacalc.com/${selectedCalc.url}`" target="_blank">{{`https://instacalc.com/${selectedCalc.url}` }}</a>
  </p>
  <div class="iframe-container">
    <iframe :src="`https://instacalc.com/${selectedCalc.url}/embed`" allowfullscreen></iframe>
  </div>
</div>

<div class="gallery">
  <div 
    v-for="calc in formattedCalcs" 
    :key="calc.url" 
    @click="selectCalc(calc)" 
    :class="['calc-item', { selected: selectedCalc === calc }]"
  >
    {{ calc.displayName }}
  </div>
</div>

<component :is="'style'">
.gallery { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 20px; 
  margin: 20px 0px; 
}
.calc-item { 
  background-color: var(--vp-c-bg-soft); 
  padding: 15px; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}
.iframe-container { 
  width: 100%; 
  height: 500px;
  border: 1px solid #ccc; 
  margin-top: 20px; 
}
iframe { 
  width: 100%; 
  height: 100%; 
  border: none; 
}
</component>
