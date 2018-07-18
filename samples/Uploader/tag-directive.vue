<template>
  <div class="control-section default-sample">
    <div class="col-lg-8">
        <label>Uploader Tag directive</label>
        <div class="control_wrapper">
            <ejs-uploader id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :dropArea = "dropElement" >
                <e-files>
                <e-uploadedfiles name='Nature' size=11000 type='.png'></e-uploadedfiles>
                <e-uploadedfiles name='TypeScript Succintly' size=20000 type='.pdf'></e-uploadedfiles>
                <e-uploadedfiles name='ASP.NET Webhooks' size=35000 type='.docx'></e-uploadedfiles>
                </e-files>
            </ejs-uploader>
        </div>
    </div>
</div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
.default-sample .control_wrapper {
    max-width: 410px;
    min-width: 245px;
    margin-top: 8%;
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
     name: 'uploadertagdirective',
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