<template>
    <Teatree ref="dd" :roots="New_Tag_TreeView" class="aa" >
                    <template  slot="node-toggle" slot-scope="{ node }" class="bb">
                        <NodeToggle  :node="node"  class="cc" />
                    </template>
                    <template   slot="node-name" slot-scope="{ node }" class="dd">
                        <NodeName
                         
                        @click="showtext"
                        class="ee"
                        href="https://www.google.com.tw/"                       
                        :node="node"
                        :handleNodeLeftClick="(x) => {}"
                        :handleNodeRightClick="() => {}"
                        ><a ></a></NodeName>
                    </template>
    </Teatree>
</template>
<script>
import { Teatree, NodeName, NodeToggle } from "vue-teatree";
import "vue-teatree/build/Teatree.css";
export default {
    name:"Tag_Article",
    components:{
        Teatree, NodeName, NodeToggle
    },
    props:['TreeViewData2','TotalLogCardData'],
    data(){
        return {
            data: [
            {
                name: "JavaScrpit",
                show: true,
                showChildren: false,
                selected: false,
                data:{"n":"dassd"},
                children: [
                {
                    name: "原型鏈",
                    show: true,
                    showChildren: false,
                    selected: false,
                    children: [
                    {
                        name: "grandchild",
                        show: true,
                        showChildren: false,
                        selected: false,
                        children: [],
                    },
                    ],
                },
                    ],
            },
            {
                name: "Vue",
                show: true,
                showChildren: false,
                selected: false,
                children: [
                {
                    name: "child",
                    show: true,
                    showChildren: true,
                    selected: false,
                    children: [
                   
                    ],
                },
                    ],
            },
              ],
            Prop_Tag_TreeViewData:null,
            Prop_Title_TotalLogCardData:null,
            New_Tag_TreeView:[]
        }
    },
    computed:{
        listenChang: function(){
            const {TreeViewData2,TotalLogCardData} = this 
            return {
                TreeViewData2,
                TotalLogCardData
            }
        }
    },
    watch:{
        listenChang(val){
            val.TreeViewData2.map(tag_res=>{
                val.TotalLogCardData.forEach(title_res=>{
                    if(tag_res.name == title_res.Name)
                       tag_res.children.push({
                        name: title_res.title_article_titlepage,
                        show: true,
                        showChildren: false,
                        selected: false,
                        children: [],
                    })
                })
               
                //console.log(x)
            })
            this.New_Tag_TreeView = val.TreeViewData2
            // console.log(val.TreeViewData2)
            console.log(this.New_Tag_TreeView)
            //console.log(val)
        },
        // 'TreeViewData2':function(n){
        //     console.log()
        //     //alert("大家好")
        //     //console.log(this.TotalLogCardData)
        //     console.log(this.TreeViewData2)
        //     this.Prop_Tag_TreeViewData = n
        //     console.log(JSON.parse(JSON.stringify(this.Prop_Tag_TreeViewData)))
        // },
        // 'TotalLogCardData':function(){
        //     this.Prop_Title_TotalLogCardData = this.TotalLogCardData
        //      console.log(JSON.parse(JSON.stringify(this.Prop_Tag_TreeViewData)))
        //     console.log(this.Prop_Tag_TreeViewData)
        //     this.UpTreedata()
        // }
    },
    created(){
        //console.log(this.$store.state.Tag_TreeViewDataVuex)
    },
    updated(){
       
    },
    mounted(){
        console.log("大家好")
        console.log(this.$refs.dd)
        // this.$store.dispatch("getArticleTag")
        // console.log(this.$store)
    },
    methods:{
        showtext: function(){
            alert("大家好")
        },
        UpTreedata: function(){
            var vue_this = this
            console.log(this.Prop_Title_TotalLogCardData)
            console.log(this.Prop_Tag_TreeViewData)
            // console.log(this.Prop_Tag_TreeViewData.length)
            // for(var i=0;i<=this.Prop_Tag_TreeViewData.length;i++){
               
            //     console.log("你好")
            // }
          //  this.Prop_Tag_TreeViewData.map(x=>{
                 console.log("好")
                 //console.log(vue_this.Prop_Title_TotalLogCardData)
               // this.Prop_Title_TotalLogCardData.forEach(y=>{
                  //  console.log("真")
               // })
                //console.log("沒有");
          //  })
          //  this.Prop_Tag_TreeViewData.map(tagres=>{
              //  console.log("沒有")
               // this.Prop_Title_TotalLogCardData.filter(titleres=>{
                  //  console.log(tagres)
                   // if(tagres.name == 'Aws'){
                       // console.log("有")
                    //     targres.children.push({
                    //     name: titleres.title_article_titlepage,
                    //     show: true,
                    //     showChildren: false,
                    //     selected: false,
                    //     children: [],
                    // },)
                   // }
               // })
                
           // })
            console.log(this.Prop_Tag_TreeViewData)
            
        }
    }
}
</script>