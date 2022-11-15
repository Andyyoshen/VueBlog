<template>
    <div class="container pb50">
    <div class="row">
        <div class="col-md-9 mb40">
            <article>
                <img style="width:800px;height:533px"  alt="" class="img-fluid mb30" :src="Article_content_data[0].img_article">
                <div class="post-content">
                    <h3>{{Article_content_data[0].title_article_titlepage}}</h3>
                    <!-- <h3>A smart template that works 24/7 for your company</h3> -->
                    <ul class="post-meta list-inline">
                        <li class="list-inline-item">
                            <i class="fa fa-user-circle-o"></i> <a >Andy</a>
                        </li>
                        <li class="list-inline-item">
                            <i class="fa fa-calendar-o"></i> <a >{{Article_content_data[0].date_article_titlepage}}</a>
                        </li>
                        <li class="list-inline-item">
                            <i class="fa fa-tags"></i> <a >{{Article_content_data[0].Name}}</a>
                        </li>
                    </ul>
                    <div class="ql-editor" v-html="Article_content_data[0].content_article">
                        
                    </div>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                    <ul class="list-inline share-buttons">
                        <li class="list-inline-item">Share Post:</li>
                        <li class="list-inline-item">
                            <a href="#" class="social-icon-sm si-dark si-colored-facebook si-gray-round">
                                <i class="fa fa-facebook"></i>
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="social-icon-sm si-dark si-colored-twitter si-gray-round">
                                <i class="fa fa-twitter"></i>
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="social-icon-sm si-dark si-colored-linkedin si-gray-round">
                                <i class="fa fa-linkedin"></i>
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul> -->
                    <hr class="mb40">
                    <h4 class="mb40 text-uppercase font500" style="font-weight:bold;">關於作者</h4>
                    <div class="media mb40">
                        <!-- <i class="d-flex mr-3 fa fa-user-circle fa-5x text-primary"></i> -->
                        <div class="avatar mr-4">
                               <img src="https://andyblog.tw:3000/images/yozhang.JPG" title="" alt="">
                         </div>
                        <div class="media-body">
                            <h4 class="mt-0 font700 "  style="font-weight:bold;">Andy</h4>
                            大家好，我是位熱愛程式的網頁工程師，我在這裡會陸續推出一些網頁開發文章。
                            <br>
                            如果有任何問題，也歡迎留言或是寫信與我討論哦 :D
                            <br>
                            Email : wwee123096@gmail.com
                        </div>
                    </div>
                    <!-- <hr class="mb40"> -->
                    <!------暫時關閉留言板功能-------->
                    <!-- <h4 class="mb40 text-uppercase font500">Comments</h4>
                    <div class="media mb40">
                        <i class="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
                        <div class="media-body">
                            <h5 class="mt-0 font400 clearfix">
                                        <a href="#" class="float-right">Reply</a>
                                        Jane Doe</h5> Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    <div class="media mb40">
                        <i class="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
                        <div class="media-body">
                            <h5 class="mt-0 font400 clearfix">
                                        <a href="#" class="float-right">Reply</a>
                                        Jane Doe</h5> Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    <div class="media mb40">
                        <i class="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
                        <div class="media-body">
                            <h5 class="mt-0 font400 clearfix">
                                        <a href="#" class="float-right">Reply</a>
                                        Jane Doe</h5> Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    <hr class="mb40">
                    <h4 class="mb40 text-uppercase font500">Post a comment</h4>
                    <form role="form">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="john@doe.com">
                        </div>
                        <div class="form-group">
                            <label>Comment</label>
                            <textarea class="form-control" rows="5" placeholder="Comment"></textarea>
                        </div>
                        <div class="clearfix float-right">
                            <button type="button" class="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </form> -->
                    <!------暫時關閉留言板功能-------->
                </div>
            </article>
            <!-- post article-->

        </div>
        
        <div class="col-md-3 mb40">
            <!-- <div class="mb40">
                <form>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search..." aria-describedby="basic-addon2">
                        <button class="input-group-addon" id="basic-addon2"><i class="fa fa-search"></i></button>
                    </div>
                </form>
            </div> -->
            <!--/col-->
             <div class="card">
                    <div class="header">
                        <div class="header row">   
                        <img style="height:38px; width:38px;" src="../assets/ribbon.png"><h2 class="ml-2" style="color: #0992a4;">文章類別</h2>
                    </div>
                    </div>
                    <TagTree  class="ml-4" :TreeViewData2 = TreeViewData2 :TotalLogCardData="TotalLogCardData"></TagTree>
                </div>
            <!--/col-->
            <div class="card">
                    <div class="header">
                        <div class="header row">   
                     <!-- <h4 class="sidebar-title">最新文章</h4> -->
                         <img style="height:38px; width:38px;" src="../assets/ribbon.png"><h2 class="ml-2" style="color: #0992a4;">最新文章</h2>
                        <ul class="list-unstyled mt-5">
                            <li class="media my-4" v-for="(Article_Title_TopNews_result, index) in Article_Title_TopNews" :key="index">
                                <img class="d-flex mr-3 img-fluid" width="64" :src="Article_Title_TopNews_result.img_article_titlepage" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1"><a href="#">{{Article_Title_TopNews_result.previewcontent_article_titlepage}}</a></h5> {{Article_Title_TopNews_result.date_article_titlepage}}
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            <!-- <div class="">
                <ul>
                    <li class="media my-4">
                        <img class="d-flex mr-3 img-fluid" width="64" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1"><a href="#">Lorem ipsum dolor sit amet</a></h5> Jan 05, 2017
                        </div>
                    </li>
                    <li class="media my-4">
                        <img class="d-flex mr-3 img-fluid" width="64" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1"><a href="#">Lorem ipsum dolor sit amet</a></h5> March 15, 2017
                        </div>
                    </li> 
                    <li class="media my-4">
                        <img class="d-flex mr-3 img-fluid" width="64" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1"><a href="#">Lorem ipsum dolor sit amet</a></h5> March 15, 2017
                        </div>
                    </li> 
                </ul>
            </div> -->
        </div>
    </div>
</div>
</template>
<script>
//  import { Teatree, NodeName, NodeToggle } from "vue-teatree";
// import "vue-teatree/build/Teatree.css";
 import 'quill/dist/quill.snow.css' // for snow theme
import TagTree from "../components/Tag_Tree.vue"
export default {
    name:'Article_content',
    components:{
        TagTree
    },
    data(){
        return{
              TreeViewData2:[],
              TotalLogCardData:null,
              type_article_titlepage_Data:{ 
                  type_article_titlepage:"Normal"  //傳入參數Normal，取得正常的blog封面
              },
              Article_content_data:null,
              Article_Title_TopNews:[],
              Clientip:{
                IpAddress:null,
                article_titlepage_id:null,
                UserDate:null
            }
        }
    },
    created: function(){
        var data = {
            article_titlepage_id:sessionStorage.getItem('article_titlepage_id')
        }
        console.log(data)
        fetch('https://api.ipify.org?format=json')
            .then(x => x.json().then(res=>{
                 var Today =    new Date()
                 this.Clientip.IpAddress = res.ip
                 this.Clientip.article_titlepage_id = data.article_titlepage_id
                 this.Clientip.UserDate = `${Today.getFullYear()}/${Today.getMonth()+1}/${Today.getDate()}${' '}${Today.getHours()}:${Today.getMinutes()}`
                 this.FunctionToken(this.apiInsertClientIpFun,this.Clientip)
                 
            }))
        
        this.FunctionToken(this.apiGetArticleContentFun,data)
        this.FunctionToken(this.apiGetArticleTitleFun,this.type_article_titlepage_Data)
        this.FunctionToken(this.apiGetTagFun,{Type:"Tag"})
        this.FunctionToken(this.apiGetTopArtitcle_TitleNewFun)
    },
    mounted(){
        
        // var data= {}
        // this.apiGetArticleContent(data)
        // .then(res=>{
        //     this.Article_content_data = res.data.Msg
        //     console.log(res.data.Msg)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    },
    methods:{
         apiInsertClientIpFun:function(data_in){
          this.apiInsertClientIp(data_in)
          .then(res=>{
              console.log(res)
          })
          .catch(err=>{console.log(err)})
      },
        apiGetTopArtitcle_TitleNewFun:function(data){
            console.log(data)
            this.apiGetTopArtitcle_TitleNew(data)
            .then(res=>{
                console.log(res)
                if(res.data.Status){
                    this.Article_Title_TopNews = res.data.Data
                }
                else{
                    console.log("請聯絡管理員")
                }
            })
            .catch(err=>{
                alert("錯誤")
                console.log(err)
            })
        },
        apiGetArticleContentFun:function(data){
            this.apiGetArticleContent(data)
            .then(res=>{
                //console.log(res.data.Data)
                this.Article_content_data = res.data.Data
                
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
                        children:[]
                   }
                    return data 
                },
            )
            console.log(this.TreeViewData2);
            this.$store.commit('SaveTagData_Vuex',this.TreeViewData2) //存進vuex
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
                  
              }
          })
          .catch(err=>{
              console.log(err)
          })
      },
    },
    beforeCreate () {
        // alert(sessionStorage.getItem('article_titlepage_id'))
    document.querySelector('body').setAttribute('style', 'background-color:#f4f7f6;')
    },
 
beforeDestroy () {
  document.querySelector('body').removeAttribute('style')
}

}
</script>
<style scoped>

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
.entry-card {
    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
}

.entry-content {
    background-color: #fff;
    padding: 36px 36px 36px 36px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.entry-content .entry-title a {
    color: #333;
}

.entry-content .entry-title a:hover {
    color: #4782d3;
}

.entry-content .entry-meta span {
    font-size: 12px;
}

.entry-title {
    font-size: .95rem;
    font-weight: 500;
    margin-bottom: 15px;
}

.entry-thumb {
    display: block;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.entry-thumb img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.entry-thumb .thumb-hover {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(71, 130, 211, 0.85);
    display: block;
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 40px;
    line-height: 100px;
    border-radius: 50%;
    margin-top: -50px;
    margin-left: -50px;
    text-align: center;
    transform: scale(0);
    -webkit-transform: scale(0);
    opacity: 0;
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
}

.entry-thumb:hover .thumb-hover {
    opacity: 1;
    transform: scale(1);
    -webkit-transform: scale(1);
}

.article-post {
    border-bottom: 1px solid #eee;
    padding-bottom: 70px;
}

.article-post .post-thumb {
    display: block;
    position: relative;
    overflow: hidden;
}

.article-post .post-thumb .post-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all .3s;
    -webkit-transition: all .3s;
    opacity: 0;
}

.article-post .post-thumb .post-overlay span {
    width: 100%;
    display: block;
    vertical-align: middle;
    text-align: center;
    transform: translateY(70%);
    -webkit-transform: translateY(70%);
    transition: all .3s;
    -webkit-transition: all .3s;
    height: 100%;
    color: #fff;
}

.article-post .post-thumb:hover .post-overlay {
    opacity: 1;
}

.article-post .post-thumb:hover .post-overlay span {
    transform: translateY(50%);
    -webkit-transform: translateY(50%);
}

.post-content .post-title {
    font-weight: 500;
}

.post-meta {
    padding-top: 15px;
    margin-bottom: 20px;
}

.post-meta li:not(:last-child) {
    margin-right: 10px;
}

.post-meta li a {
    color: #999;
    font-size: 13px;
}

.post-meta li a:hover {
    color: #4782d3;
}

.post-meta li i {
    margin-right: 5px;
}

.post-meta li:after {
    margin-top: -5px;
    content: "/";
    margin-left: 10px;
}

.post-meta li:last-child:after {
    display: none;
}

.post-masonry .masonry-title {
    font-weight: 500;
}

.share-buttons li {
    vertical-align: middle;
}

.share-buttons li a {
    margin-right: 0px;
}

.post-content .fa {
    color: #ddd;
}

.post-content a h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0px;
}

.article-post .owl-carousel {
    margin-bottom: 20px !important;
}

.post-masonry h4 {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
}
.mb40 {
    margin-bottom: 40px !important;
}
.mb30 {
    margin-bottom: 30px !important;
}
.media-body h5 a {
    color: #555;
}

/*
Template sidebar
*/

.sidebar-title {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.media-body h5 {
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 20px;
    font-weight: 400;
}

.media-body h5 a {
    color: #555;
}

.media-body h5 a:hover {
    color: #4782d3;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
}
img {
    max-width: 100%;
}
</style>