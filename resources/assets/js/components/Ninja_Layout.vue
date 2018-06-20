<template>
    <div class="">
        <nav  class="navbar navbar-expand-md navbar-light fixed-top  bg-white " id="my-nav-links">
            <div class="container">
                <a href="#" class="navbar-brand mb-0"><img class="img-fluid" :src="'img-assets/logo.png'" id="logo-img" alt="Ninja Roofing Logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-column " id="navbarCollapse">
                  <span class="navbar-text ml-auto py-0 px-lg-2 text-danger"><h4 class="h4-responsive text-danger"><a href="tel:1-778-773-2716" class="text-danger">778-773-2716</a></h4></span>

                  <ul class="navbar-nav nav-fill justify-content-center w-100">
                    <li class="nav-item">
                        <router-link :to="{name: 'Home'}" class="nav-link py-0 links text-danger" v-on:click="setActive('home')" :class="{active: isActive('home')}">HOME</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name: 'Residential'}" class="nav-link py-0 links text-danger" v-on:click="setActive('Residential')" :class="{active: isActive('Residential')}" >RESIDENTIAL</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name: 'Re-roofing'}" class="nav-link py-0 links text-danger" v-on:click="setActive('Re-roofing')" :class="{active: isActive('Re-roofing')}">RE-ROOFING</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name:'repairs-maintenance'}" class="nav-link py-0 links text-danger" v-on:click="setActive('repairs-maintenance')" :class="{active: isActive('repairs-maintenance')}" >REPAIRS & MAINTENANCE</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name: 'construction'}" class="nav-link py-0 links text-danger" v-on:click="setActive('construction')" :class="{active: isActive('construction')}" >NEW CONSTRUCTION</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name: 'products'}" class="nav-link py-0 links text-danger" v-on:click="setActive('products')" :class="{active: isActive('products')}" >PRODUCTS</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name: 'contact'}" class="nav-link py-0 links text-danger" v-on:click="setActive('contact')" :class="{active: isActive('contact')}" >CONTACT</router-link>
                    </li>
                  </ul>
                </div>
            </div>

        </nav>


        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
new Vue({
      el: '#my-nav-links',

      data(){
          return{
              isActive: 'home'
          }
      },

      methods: {
        myFilter: function(){
            this.isActive = !this.isActive;
        }
      }
  });
export default {
    data(){
        return{
            activeItem: 'home'
        }
    },

    methods: {
      isActive: function(menuItem){
          return this.isActive === menuItem
      },
      setActive: function(menuItem){
          this.activeItem = menuItem
      }

    }
}
</script>

<style lang="css">
    img#logo-img{
        max-width: 190px;
        max-height: 130px;
    }
</style>
