<template>
   <paginate  :page-count="20"
                :page-range="3"
                :margin-pages="2"
                :page-class="'page-item'" 
                :page-link-class="'page-link'"
                :container-class="'pagination'" 
                :prev-class="'page-item'" 
                :prev-link-class="'page-link'" 
                :next-class="'page-item'"
                :next-link-class="'page-link'" 
                :click-handler="pageCallback">
    </paginate>
</template>
<script>
import Paginate from 'vuejs-paginate'
export default {
    name:"Panginate",
    components:{
        Paginate
    }
}
</script>
<style scoped>

</style>