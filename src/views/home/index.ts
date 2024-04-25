import component from "./components/home.vue";
component.install = function(Vue:any) {
    Vue.component(component.name, component);
};
export default component;
