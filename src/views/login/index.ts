import component from "./components/login.vue";
component.install = function(Vue:any) {
    Vue.component(component.name, component);
};
export default component;
