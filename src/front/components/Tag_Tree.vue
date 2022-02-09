<template>
     <LiquorTree
      ref="tree"
      :data="New_Tag_TreeView"
      v-model="test"
      @node:selected="onNodeSelected"
      
    />
</template>
<script>
import LiquorTree from 'liquor-tree'
export default {
    name:"tag_tree",
    components:{
        LiquorTree
    },
    props:['TreeViewData2','TotalLogCardData'],
    data(){
        return{
            treeData: [
            { text: 'Item 1' },
             { text: 'Item 2' ,children: [
            	{ text: 'Item 2.1' },
              { text: 'Item 2.2' },
              { text: 'Item 2.3' }
            ]},
            { text: 'Item 3' },
            { text: 'Item 4' }
        ],
        Prop_Tag_TreeViewData:null,
            Prop_Title_TotalLogCardData:null,
            New_Tag_TreeView:[],
            test:null
        }
    },
    mounted(){
       
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
            console.log(val)
            val.TreeViewData2.map(tag_res=>{
                val.TotalLogCardData.forEach(title_res=>{
                    if(tag_res.text == title_res.Name)
                       tag_res.children.push({
                        text: title_res.title_article_titlepage,
                        children: [],
                        data:{
                        id_article_titlepage:title_res.id_article_titlepage
                        }
                    })
                }) 
            })
           // return val.TreeViewData2
            this.New_Tag_TreeView = val.TreeViewData2
            this.$refs.tree.setModel(this.New_Tag_TreeView)
            console.log(this.New_Tag_TreeView)
            //console.log(val)
        },
    },
    methods:{

        onNodeSelected: function(node) {
            console.log(node)
            if(node.data.id_article_titlepage!= undefined){
                console.log(this.$route.fullPath)
                console.log(this.$route.params)
                console.log(this.$route.path)
                this.$store.commit('ChangArticle',node.data.id_article_titlepage)
                this.$router.push({path:'/Article_content',query:{t:Date.now()}}).catch(err => {
                    console.log(err)
                })
            }
        	//console.log(node.data.id_article_titlepage)  // I dont want to show parent node text 
           // console.log(this.test)
        }
    }
}
</script>