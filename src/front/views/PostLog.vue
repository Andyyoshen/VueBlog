<template>
<div>
    <div id="main-content" class="blog-page">
        
    <div class="container mb-5">
        <div class="row clearfix">
            <div class="col-lg-8 col-md-12 left-box">
                <div v-for="(LogCardData,index) in LogCardData" :key="index">
                <LogCard :LogCardData="LogCardData"></LogCard>
                </div>
                <div>
                    <Panginate :PanginateLength="PanginateLength" @update="getPanginateValue"></Panginate>
                </div>        
            </div>
            <div class="col-lg-4 col-md-12 right-box">
                <div class="blog-aside">
                    <!-- Author -->
                    <div class="widget widget-author">
                        <div class="widget-title">
                            <h3>關於作者</h3>
                        </div>
                        <div class="widget-body">
                            <div class="media align-items-center">
                                <div class="avatar">
                                    <!-- <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title="" alt=""> -->
                                    <img src="https://andyblog.tw:3000/images/yozhang.JPG" title="" alt="">

                                </div>
                                <div class="media-body">
                                    <h6>hi, 我是Andy</h6>
                                </div>
                            </div>
                            <!-- <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p> -->
                            <p>大家好，我是位熱愛程式的網頁工程師，我在這裡會陸續推出一些網頁開發文章。</p>
                            <!-- <br> -->
                            <p>Hello everyone, I am a web developer who loves to develop web pages. I will release some articles on web development by engineers and web pages one after another.</p>
                            <span class="fa fa-envelope">&ensp;wwee123096@gmail.com</span>
                        </div>
                    </div>
                    </div>
                <div class="card">
                    <div class="body search">
                        <div class="input-group m-b-0">
                            <div class="input-group-prepend">
                                <button @click="SearchTitle()" class="input-group-text"><i class="fa fa-search"></i></button>
                              <!-- <span @click="SearchTitle()" class="input-group-text"><i class="fa fa-search"></i></span> -->
                            </div>
                            <input type="text" class="form-control" v-model="SearchData" placeholder="文章搜尋...">                                    
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="header row ml-2">   
                        <img style="height:38px; width:38px;" src="../assets/ribbon.png"><h2 class="ml-2" style="color: #0992a4;">文章類別</h2>
                    </div>
                    <TagTree class="ml-4" :TreeViewData2 = TreeViewData2 :TotalLogCardData="TotalLogCardData"  ></TagTree>
                   <!-- <TagAtticle :TreeViewData2 = TreeViewData2 :TotalLogCardData="TotalLogCardData"></TagAtticle> -->
                    
                    <!-- <Teatree :roots="data">
                    <template slot="node-toggle" slot-scope="{ node }">
                        <NodeToggle :node="node" />
                    </template>
                    <template slot="node-name" slot-scope="{ node }">
                        <NodeName
                        :node="node"
                        :handleNodeLeftClick="() => {}"
                        :handleNodeRightClick="() => {}"
                        />
                    </template>
                    </Teatree> -->
                </div>
                <!-- <div class="card">
                    <div class="header">
                        <h2>Popular Posts</h2>                        
                    </div>
                    <div class="body widget popular-post">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="single_post">
                                    <p class="m-b-0">Apple Introduces Search Ads Basic</p>
                                    <span>jun 22, 2018</span>
                                    <div class="img-post">
                                        <img src="https://via.placeholder.com/280x280/FFB6C1/000000" alt="Awesome Image">                                        
                                    </div>                                            
                                </div>
                                <div class="single_post">
                                    <p class="m-b-0">new rules, more cars, more races</p>
                                    <span>jun 8, 2018</span>
                                    <div class="img-post">
                                        <img src="https://via.placeholder.com/280x280/FFB6C1/000000" alt="Awesome Image">                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="card">
                    <div class="header">
                        <h2>Instagram Post</h2>
                    </div>
                    
                    <div class="body widget">
                        <ul class="list-unstyled instagram-plugin m-b-0">
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                            <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/80x80/FFB6C1/000000" alt="image description"></a></li>
                        </ul>
                    </div>
                </div> -->
                    
                <!-- <div class="card">
                    <div class="header">
                        <h2>Email Newsletter <small>Get our products/news earlier than others, let’s get in touch.</small></h2>
                    </div>
                    <div class="body widget newsletter">                        
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter Email">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="icon-paper-plane"></i></span>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
 </div>
</div>
</template>
<script>
// import { Teatree, NodeName, NodeToggle } from "vue-teatree";
import "vue-teatree/build/Teatree.css";
import LogCard from "../components/LogCard.vue"
import Panginate from "../components/Panginate.vue"
import TagAtticle from "../components/Tag_Article.vue"
import TagTree from "../components/Tag_Tree.vue"
export default {
    name:'PostLog',
    components:{
        LogCard,Panginate,TagAtticle,TagTree
    },
    data(){
        return {
         LogCardData:[
            {
             Title:"我要講vue",
             content:"今天天氣很好",
             id:"one"
            },
            {
             Title:"我要講javascript",
             content:"情",
             id:"two"
            },
            {
             Title:"我要講aws",
             content:"帥哥",
             id:"three"
            }
         ],
         TreeViewData: [
            {
                name: null,
                show: true,
                showChildren: false,
                selected: false,
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
                name: null,
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
              TreeViewData2:[], //替樹狀資料夾創一個預設陣列。
              type_article_titlepage_Data:{ 
                  type_article_titlepage:"Normal"  //傳入參數Normal，取得正常的blog封面
              },
              PanginateValue:null,
              TotalLogCardData:null,
              PanginateLength:null,
              nn:"我是beforeMount",
              SearchData:null
        }
    },
    created:  function() {
        this.FunctionToken(this.apiGetArticleTitleFun,this.type_article_titlepage_Data)
        this.FunctionToken(this.apiGetTagFun,{Type:"Tag"})
    },
    
    mounted(){
       
    //   this.FunctionToken(this.apiGetArticleTitleFun,this.type_article_titlepage_Data)
     // console.log($('#tree').buildTree())
     
    },
    methods:{ 
      getPanginateValue:function(val){ //取得子層Panginate的值
        var PanginateValue =  val
        var indexpage =  5
        var FinalNum = indexpage*PanginateValue
        this.LogCardData =  this.TotalLogCardData.slice(FinalNum-indexpage,FinalNum)
      },
      SearchTitle: function(){
          var DTO = {
              SearchData:this.SearchData
          }
          this.FunctionToken(this.apiSearchArticleFun,DTO)
      },
      apiSearchArticleFun: function(data_in){
          this.apiSearchArticle(data_in)
          .then(res=>{
              this.TotalLogCardData = res.data.Data
              this.PanginateLength = this.TotalLogCardData.length
                console.log(this.PanginateLength)
                this.LogCardData = this.TotalLogCardData.slice(0,5)
          })
          .catch(err=>{
              console.log(err)
          })
      },
      apiGetTagFun:function(data_in){
          this.apiGetTag(data_in)
          .then(async res=>{
            this.TreeViewData2 = await res.data.Data.map(x=>{
                   var  data = {
                        text:x.Name,
                        //show:true,
                       // showChildren: false,
                        //selected: false,
                        children:[]
                   }
                    return data 
                },
            )
            console.log(this.TreeViewData2);
            this.$store.commit('SaveTagData_Vuex',this.TreeViewData2) //存進vuex
            //console.log(this.$store.state.Tag_TreeViewDataVuex)
          })
          .catch(err=>{
              console.log(err)
          })
      },
      apiGetArticleTitleFun:  function(data_in){
          this.apiGetArticleTitle(data_in)
          .then(res=>{
              if(res.data.Status){
                  
                  this.TotalLogCardData = res.data.Data
                  console.log(this.TotalLogCardData)
                  this.$store.commit('SaveArticleTitleVuex',this.TotalLogCardData) //存進vuex
                  this.PanginateLength = this.TotalLogCardData.length
                  console.log(this.PanginateLength)
                  this.LogCardData = this.TotalLogCardData.slice(0,5)
                  
              }
          })
          .catch(err=>{
              console.log(err)
          })
      },
     getTree: function () {
    //節點上的資料遵循如下的格式：
    var tree = [{
        text: "Node 1", //節點顯示的文字值  string
        icon: "glyphicon glyphicon-play-circle", //節點上顯示的圖示，支援bootstrap的圖示  string
        selectedIcon: "glyphicon glyphicon-ok", //節點被選中時顯示的圖示       string
        color: "#ff0000", //節點的前景色      string
        backColor: "#1606ec", //節點的背景色      string
        href: "#http://www.baidu.com", //節點上的超連結
        selectable: true, //標記節點是否可以選擇。false表示節點應該作為擴充套件標題，不會觸發選擇事件。  string
        state: { //描述節點的初始狀態    Object
            checked: true, //是否選中節點
            /*disabled: true,*/ //是否禁用節點
            expanded: true, //是否展開節點
            selected: true //是否選中節點
        },
        tags: ['標籤資訊1', '標籤資訊2'], //向節點的右側新增附加資訊（類似與boostrap的徽章）    Array of Strings
        nodes: [{
            text: "Child 1",
            nodes: [{
                text: "Grandchild 1"
            }, {
                text: "Grandchild 2"
            }]
        }, {
            text: "Child 2"
        }]
    }, {
        text: "Parent 2",
        nodes: [{
            text: "Child 2",
            nodes: [{
                text: "Grandchild 3"
            }, {
                text: "Grandchild 4"
            }]
        }, {
            text: "Child 2"
        }]
    }, {
        text: "Parent 3"
    }, {
        text: "Parent 4"
    }, {
        text: "Parent 5"
    }];

    return tree;
}
  },
  beforeCreate () {
  document.querySelector('body').setAttribute('style', 'background-color:#f4f7f6;')
},
 
beforeDestroy () {
  document.querySelector('body').removeAttribute('style')
}
}
</script>
<style scoped>
/* .body{
    background-color: #f4f7f6;
    margin-top:20px;
} */
img {
    max-width: 100%;
}
.card {
    background: #fff;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.card .body {
    color: #444;
    padding: 20px;
    font-weight: 400;
}
.card .header {
    color: #444;
    padding: 20px;
    position: relative;
    box-shadow: none;
}
.single_post {
    -webkit-transition: all .4s ease;
    transition: all .4s ease
}

.single_post .body {
    padding: 30px
}

.single_post .img-post {
    position: relative;
    overflow: hidden;
    max-height: 500px;
    margin-bottom: 30px
}

.single_post .img-post>img {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-transition: -webkit-transform .4s ease, opacity .4s ease;
    transition: transform .4s ease, opacity .4s ease;
    max-width: 100%;
    filter: none;
    -webkit-filter: grayscale(0);
    -webkit-transform: scale(1.01)
}

.single_post .img-post:hover img {
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
    opacity: .7;
    filter: gray;
    -webkit-filter: grayscale(1);
    -webkit-transition: all .8s ease-in-out
}

.single_post .img-post:hover .social_share {
    display: block
}

.single_post .footer {
    padding: 0 30px 30px 30px
}

.single_post .footer .actions {
    display: inline-block
}

.single_post .footer .stats {
    cursor: default;
    list-style: none;
    padding: 0;
    display: inline-block;
    float: right;
    margin: 0;
    line-height: 35px
}

.single_post .footer .stats li {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    display: inline-block;
    font-weight: 400;
    letter-spacing: 0.25em;
    line-height: 1;
    margin: 0 0 0 2em;
    padding: 0 0 0 2em;
    text-transform: uppercase;
    font-size: 13px
}

.single_post .footer .stats li a {
    color: #777
}

.single_post .footer .stats li:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0
}

.single_post h3 {
    font-size: 20px;
    text-transform: uppercase
}

.single_post h3 a {
    color: #242424;
    text-decoration: none
}

.single_post p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
    margin: 0
}

.single_post .blockquote p {
    margin-top: 0 !important
}

.single_post .meta {
    list-style: none;
    padding: 0;
    margin: 0
}

.single_post .meta li {
    display: inline-block;
    margin-right: 15px
}

.single_post .meta li a {
    font-style: italic;
    color: #959595;
    text-decoration: none;
    font-size: 12px
}

.single_post .meta li a i {
    margin-right: 6px;
    font-size: 12px
}

.single_post2 {
    overflow: hidden
}

.single_post2 .content {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 80px;
    position: relative
}

.single_post2 .content .actions_sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 60px
}

.single_post2 .content .actions_sidebar a {
    display: inline-block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-right: 0;
    text-align: center;
    border-right: 1px solid #e4eaec
}

.single_post2 .content .title {
    font-weight: 100
}

.single_post2 .content .text {
    font-size: 15px
}

.right-box .categories-clouds li {
    display: inline-block;
    margin-bottom: 5px
}

.right-box .categories-clouds li a {
    display: block;
    border: 1px solid;
    padding: 6px 10px;
    border-radius: 3px
}

.right-box .instagram-plugin {
    overflow: hidden
}

.right-box .instagram-plugin li {
    float: left;
    overflow: hidden;
    border: 1px solid #fff
}

.comment-reply li {
    margin-bottom: 15px
}

.comment-reply li:last-child {
    margin-bottom: none
}

.comment-reply li h5 {
    font-size: 18px
}

.comment-reply li p {
    margin-bottom: 0px;
    font-size: 15px;
    color: #777
}

.comment-reply .list-inline li {
    display: inline-block;
    margin: 0;
    padding-right: 20px
}

.comment-reply .list-inline li a {
    font-size: 13px
}

@media (max-width: 640px) {
    .blog-page .left-box .single-comment-box>ul>li {
        padding: 25px 0
    }
    .blog-page .left-box .single-comment-box ul li .icon-box {
        display: inline-block
    }
    .blog-page .left-box .single-comment-box ul li .text-box {
        display: block;
        padding-left: 0;
        margin-top: 10px
    }
    .blog-page .single_post .footer .stats {
        float: none;
        margin-top: 10px
    }
    .blog-page .single_post .body,
    .blog-page .single_post .footer {
        padding: 30px
    }
}

/* <!-- Author --> */
.blog-aside .widget {
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  /* margin-top: 15px; */
  margin-bottom: 15px;
  width: 100%;
  display: inline-block;
  vertical-align: top;
}
.blog-aside .widget-body {
  padding: 15px;
}
.blog-aside .widget-title {
  padding: 15px;
  border-bottom: 1px solid #eee;
}
.blog-aside .widget-title h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0992a4;
  margin: 0;
}
.blog-aside .widget-author .media {
  margin-bottom: 15px;
}
.blog-aside .widget-author p {
  font-size: 16px;
  margin: 0;
}
.blog-aside .widget-author .avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
}
.blog-aside .widget-author h6 {
  font-weight: 600;
  color: #20247b;
  font-size: 22px;
  margin: 0;
  padding-left: 20px;
}

/* ul*/
.categories li a:before {
    content: "\f0da";
    font-family: 'FontAwesome';
    margin-right: 5px;
}
/*
Template sidebar
*/

.sidebar-title {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.categories li {
    vertical-align: middle;
}

.categories li > ul {
    padding-left: 15px;
}

.categories li > ul > li > a {
    font-weight: 300;
}

.categories li a {
    color: #999;
    position: relative;
    display: block;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
}

.categories li a:before {
    content: "\f0da";
    font-family: 'FontAwesome';
    margin-right: 5px;
}

.categories li a:hover {
    color: #444;
    background-color: #f5f5f5;
}

.categories > li.active > a {
    font-weight: 600;
    color: #444;
}
</style>