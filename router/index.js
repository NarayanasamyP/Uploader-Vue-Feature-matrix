import Vue from 'vue';
import Router from 'vue-router';
import Uploader from '../samples/Uploader/uploader';
import Uploadtagdirective from '../samples/Uploader/tag-directive'; //depedency-injection template
import UploaderDynamic from '../samples/Uploader/dynamic-rendering';
import UploaderTemplate from '../samples/Uploader/template';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Uploader/:name',
      name: 'uploader',
      component: Uploader
    },
    {
      path: '/tag-directive/:name',
      name: 'tag-directive',
      component: Uploadtagdirective
    },
    {
      path: '/dynamic-rendering/:name',
      name: 'dynamic-rendering',
      component: UploaderDynamic
    },
    {
      path: '/template/:name',
      name: 'template',
      component: UploaderTemplate
    }
  ]
})