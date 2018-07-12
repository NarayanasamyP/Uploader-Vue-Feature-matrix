<template>
  <div class="control-section default-sample">
    <div class="col-lg-8">
        <label> Uploader rendering </label>
        <div class="control_wrapper">
            <ejs-uploader id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :dropArea = "dropElement"></ejs-uploader>
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
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);
export default Vue.extend({
     name: 'uploader',
    data: function(){
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-section'
        }
    }
});
</script>