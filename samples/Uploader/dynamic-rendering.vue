<template>
  <div class="control-section default-sample">
    <div class="col-lg-8">
        <label> Uploader Dynamic Rendering </label>
        <div class="control_wrapper" ref="container">
        <button @click="onClick">Render Uploader</button>
        </div>
    </div>
</div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
.default-sample .control_wrapper {
    max-width: 410px;
    margin-top: 8%;
    min-width: 245px;
    margin-left: 52%;
}
#defaultfileupload .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}
</style>
<script>
import Vue from "vue";
import Upload from './newComponent'
	export default {
    name: 'app',
    components: { Upload },
    methods: {
      onClick() {
        var ComponentClass = Vue.extend(Upload)
        var instance = new ComponentClass({
        })
        instance.$mount() // pass nothing
        // console.log(this.$refs)
        this.$refs.container.appendChild(instance.$el)
      }
    }
  }
</script>
