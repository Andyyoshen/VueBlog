<template>
   <paginate    v-model="page"
                :page-count="pagecount"
                :page-range="3"
                :margin-pages="2"
                :page-class="'page-item'" 
                :page-link-class="'page-link'"
                :container-class="'pagination'" 
                :prev-class="'page-item'" 
                :prev-link-class="'page-link'" 
                :next-class="'page-item'"
                :next-link-class="'page-link'" 
                :click-handler="PageNumFun"
                >
    </paginate>
</template>
<script>
import Paginate from 'vuejs-paginate'
export default {
    name:"Panginate",
    components:{
        Paginate
    },
    props:['PanginateLength'],
    data(){
        return {
            page:"1",
            pagecount:1
        }
    },
    watch:{
        PanginateLength(){
            //alert(this.PanginateLength)
            this.pagecount = parseInt(this.PanginateLength/5)
            if(this.PanginateLength%5 != 0){
            this.pagecount =  this.pagecount+1 
            }
            
            console.log(this.pagecount)
        }
    },
    mounted(){

    },

    methods:{
        PageNumFun:function(data){
            this.$emit('update',data)
            console.log(data)
        }
    }

}
</script>
<style scoped>

</style>