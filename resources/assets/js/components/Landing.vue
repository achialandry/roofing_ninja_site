<template>
    <div>
        <div class="container-fluid" id="landing-page"><br><br>
            <div class="row mt-5 mb-3"><br><br>
                <div class="col-md-4 offset-md-4 mx-auto text-center "><br><br><br>
                    <img :src="'img-assets/logo.png'" alt="Ninja Roofing Logo" class="img-fluid">
                </div>
            </div>
            <div class="row mt-0 mb-5"><br><br>
                <div class="col-md-6 offset-md-3 mx-auto text-center "><br><br><br>
                    <h2 class="h2-responsive white-text">RESIDENTIAL ROOFING SINCE 2009</b></h2>
                </div>
            </div>
            <div class="row mt-0 mb-5"><br><br>
                <div class="col-md-4 offset-md-4 text-center ">
                    <a id="read-more-btn" href="#" class="btn btn-danger">READ MORE<i class="fas fa-angle-double-right text-white ml-2"></i></a>
                </div>
            </div>
            <div class="container mb-5">
                <div class="row mb-5 text-center">
                    <div class="col-md-2 col-sm-2 text-center offset-md-1">
                        <img :src="'img-assets/certainteed.png'" alt="Ninja Roofing Logo" class="img-fluid mt-3">
                    </div>
                    <div class="col-md-2 col-sm-2 text-center">
                        <img :src="'img-assets/gaf.png'" alt="Ninja Roofing Logo" class="img-fluid mt-3">
                    </div>
                    <div class="col-md-2 col-sm-2 text-center">
                        <img :src="'img-assets/timberline.png'" alt="Ninja Roofing Logo" class="img-fluid">
                    </div>
                    <div class="col-md-2 col-sm-2 text-center">
                        <img :src="'img-assets/malarkey.png'" alt="Ninja Roofing Logo" class="img-fluid mt-3">
                    </div>
                    <div class="col-md-2 col-sm-2 text-center">
                        <img :src="'img-assets/iko.png'" alt="Ninja Roofing Logo" class="img-fluid mt-3">
                    </div>
                </div>
            </div><br><br>
        </div>
        <second-layout></second-layout>
        <third-layout></third-layout>
        <landing-page-4></landing-page-4>
        <before-footer-layout></before-footer-layout>
        <footer-layout></footer-layout>
    </div>
</template>

<script>
    //importing components of home page
    import Landing_two from './Landing-Page-two.vue'
    import Landing_three from './Landing-Page-three.vue'
    import Landing_four from './Landing-Page-About.vue'
    import Landing_five from './Landing-Page-Base.vue'
    import Footer from './Footer.vue'
    export default {
        components: {
            'second-layout': Landing_two,
            'third-layout': Landing_three,
            'landing-page-4': Landing_four,
            'before-footer-layout': Landing_five,
            'footer-layout': Footer
        },

    }
</script>
