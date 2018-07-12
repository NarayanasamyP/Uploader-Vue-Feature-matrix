<template>
  <div id="app">
   <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	  <div style="padding-left:0px;" class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"> 
      <ul class="nav navbar-nav" >
        <li data-toggle="collapse" ><router-link to="/uploader/ejs">Uploader Default</router-link></li>
        <li data-toggle="collapse" ><router-link to="/tag-directive/ejs">Tag Directive</router-link></li>
        <li data-toggle="collapse" ><router-link to="/dynamic-rendering/ejs">Dynamic Rendering</router-link></li>
        <li data-toggle="collapse" ><router-link to="/template/ejs">Template Support</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>

</style>