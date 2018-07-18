<template>
    <div class="control_wrappers">
        <ejs-uploader id='dynamicfileupload' name="UploadFiles" :asyncSettings= "path" :dropArea = "dropElement" ></ejs-uploader>
    </div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
#dynamicfileupload .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}
.control_wrappers {
    margin-top: 8%;
    width: 500px;
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
          dropElement: '.control_wrappers'
        }
    }
});
</script>
