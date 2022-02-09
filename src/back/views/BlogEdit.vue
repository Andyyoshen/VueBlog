<template>
  
<!-- <html lang="en"> -->
<!-- <body class="hold-transition sidebar-mini"> -->
<div class="wrapper">
  
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Text Editors</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Text Editors</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-outline card-info" >
            <div class="card-body">
              <form class="form-inline mt-4 mb-3">
                <div>
                  <label class="ml-3" for="inputPassword6">標題 :</label>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <input type="text" class="form-control"  v-model="Article_content_data[0].title_article_titlepage" >
                </div>
                
                <div>
                  <label class="ml-3" for="inputPassword6">標籤 :</label>
                </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <select v-model="Article_content_data[0].idDropDown_list" @change="test($event)" class="form-control" id="exampleFormControlSelect1">
                      <option v-for="(option_data , index) in Tag_Select_Data" :key="index" :value="option_data.idDropDown_list">{{option_data.Name}}</option>
                    </select>               
                   </div>
                   <div>
                      <label class="ml-3" for="inputPassword6">封面圖 :</label>
                  </div>
                  <div>
                    <img :src="image" class="ml-3" style="width:100px">
                  </div>
                  <div>
                    <button class="btn btn-danger ml-3" v-if="ImageDeleteButtonShow" @click="DeleteIamge()">刪除封面圖</button>
                  </div>
                   <div class="form-group mx-sm-3 mb-2" v-if="FileInputeShow">  
                    <input type="file" ref="TitleImageLoad" class="form-control-file" @change="filechange($event)">
                   </div>
                <!-- <button type="submit" class="btn btn-primary mb-2">Confirm identity</button> -->
              </form>
              <form class="form-inline mt-4 mb-3">
                <div>
                  <label class="ml-3" for="inputPassword6">文章摘要:</label>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <textarea  type="text" class="form-control"  v-model="Article_content_data[0].previewcontent_article_titlepage" ></textarea>
                </div>
              </form>
                <div class="editor-container " style="padding-bottom: 80px;">
                <quill-editor
                    ref="myQuillEditor"
                    v-model="Article_content_data[0].content_article"
                    style="height: 300px;"
                    :options="editorOption"
                   
                />
                <input type="file"  id="getFile" @change="uploadFunction($event)" hidden/>
                </div>
                <!-- <el-upload
                    class="avatar-uploader"
                    action=""
                    name="img"
                    :show-file-list="false"
                    :on-change="onChangeQuill">
                  </el-upload> -->
              <!-- <input type="file" id="getFile" @change="uploadFunction($event)" /> -->
            </div>
          </div>
        </div>
        <!-- /.col-->
      </div>
      <!-- ./row -->
    </section>
    <div class="col-md-12">
    <div class="row">
      <div class="col-sm-11"><button type="button" class="btn btn-primary">刪除</button></div>
      <!-- <div class="col-sm"><button type="button" class="btn btn-primary">Primary2</button></div> -->
      <div class="col-sm"><button 
                        type="button" 
                        class="btn btn-primary"
                        @click="UpdateArticleContent()"
                        >更新</button></div>
    </div>
    </div>
    <!-- <div >
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-primary">Primary2</button>
      <button type="button" class="btn btn-primary">Primary3</button>

    </div> -->
    <!-- /.content -->   
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 3.2.0-rc
    </div>
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
  <!-- Control Sidebar -->
  <!-- /.control-sidebar -->
</div>
<!-- Page specific script -->

<!-- </body> -->
<!-- </html> -->
</template>
<script>
//文字編輯器
import { quillEditor,Quill} from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'
import 'quill/dist/quill.snow.css' // for snow theme
Quill.register('modules/imageResize', ImageResize)
//======================================================
import "../../../public/plugins/summernote/summernote-bs4.min.css"
import "../../../public/plugins/codemirror/codemirror.css"
import "../../../public/plugins/codemirror/theme/monokai.css"

// import "../../../public/plugins/simplemde/simplemde.min.css"

import "../../../public/plugins/jquery/jquery.min.js"
import "../../../public/plugins/bootstrap/js/bootstrap.bundle.min.js"

import "../../../public/plugins/summernote/summernote-bs4.min.js"
import "../../../public/plugins/codemirror/codemirror.js"
import "../../../public/plugins/codemirror/mode/css/css.js"
import "../../../public/plugins/codemirror/mode/xml/xml.js"
import "../../../public/plugins/codemirror/mode/htmlmixed/htmlmixed.js"
//import "../../../public/dist/js/demo.js" // 目前不知道用處

//import "../../../public/dist/js/adminlte.min.js" // 滑動旁邊menu的標誌

export default {
    name:"BlogEdit",
    components:{
        quillEditor
    },
    data(){
        return{
            formData: new FormData(),
            ImageFormData: new FormData(),
            image:"",
            Tag_data:{
              Type:"Tag"
            },
            ImageDeleteButtonShow:true,  //  按鈕顯示於否
            FileInputeShow:false,       //   上傳按鍵顯示於否
            TitleImage:null,
            Tag_Select_Data:null,
            Tag_Inset_Data:null,
            content:{
             content_article:"",
             title_article_titlepage:"",
             previewcontent_article_titlepage:"", //封面摘要
             tag_article_titlepage:1,
             img_article_titlepage:null
              },
            titleConfig :{
            'ql-bold': '加粗',
            'ql-color': '顏色',
            'ql-font': '字體',
            'ql-code': '插入代碼',
            'ql-italic': '斜體',
            'ql-link': '添加鏈接',
            'ql-background': '背景顏色',
            'ql-size': '字體大小',
            'ql-strike': '刪除線',
            'ql-script': '上標/下標',
            'ql-underline': '下劃線',
            'ql-blockquote': '引用',
            'ql-header': '標題',
            'ql-indent': '縮進',
            'ql-list': '列表',
            'ql-align': '文本對齊',
            'ql-direction': '文本方向',
            'ql-code-block': '代碼塊',
            'ql-formula': '公式',
            'ql-image': '圖片',
            'ql-video': '視頻',
            'ql-clean': '清除字體樣式'
          }, //文檔編輯器功能欄基本配置

          editorOption: {
          //  富文本編輯器配置
            modules: {
                imageResize: {//圖片大小更改
                displayStyles: {
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                },
                modules: ["Resize", "DisplaySize", "Toolbar"],
                },
                toolbar: {
                    container: [
                                ["bold", "italic", "underline", "strike"], // 加粗 斜體 下劃線 刪除線 -----['bold', 'italic', 'underline', 'strike']
                                ["blockquote", "code-block"], // 引用  代碼塊-----['blockquote', 'code-block']
                                [{ header: 1 }, { header: 2 }], // 1、2 級標題-----[{ header: 1 }, { header: 2 }]
                                [{ list: "ordered" }, { list: "bullet" }], // 有序、無序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
                                [{ script: "sub" }, { script: "super" }], // 上標/下標-----[{ script: 'sub' }, { script: 'super' }]
                                [{ indent: "-1" }, { indent: "+1" }], // 縮進-----[{ indent: '-1' }, { indent: '+1' }]
                                [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
                                [{ size: ["small", false, "large", "huge"] }], // 字體大小-----[{ size: ['small', false, 'large', 'huge'] }]
                                [{ header: [1, 2, 3, 4, 5, 6, false] }], // 標題-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
                                [{ color: [] }, { background: [] }], // 字體顏色、字體背景顏色-----[{ color: [] }, { background: [] }]
                                [{ font: [] }], // 字體種類-----[{ font: [] }]
                                [{ align: [] }], // 對齊方式-----[{ align: [] }]
                                ["clean"], // 清除文本格式-----['clean']
                                ["image", "video"] // 鏈接、圖片、視頻-----['link', 'image', 'video']
                            ],  // 工具欄
                     handlers: {
                                'image': function(value){
                                if (value) {
                                  console.log(value)
                                  console.log("好")
                                    // 觸發input框選擇圖片文件
                                    document.getElementById('getFile').click()
                                  } else {
                                    this.quill.format('image', false);
                                  }
                                }
                            }
                  },
                },
            //主題
                placeholder: "請輸入正文"

            },
            Article_content_data:[{
                Name: "1",
                tag_article_titlepage:"1",
                idDropDown_list:1,
                title_article_titlepage:null,
                tag_article_titlepage:null,
                previewcontent_article_titlepage:null,
                content_article:null

            }],
            aa:[{
               Name: "1",
                idDropDown_list:1,
                title_article_titlepage:null,
                tag_article_titlepage:null,
                previewcontent_article_titlepage:null,
                content_article:null
            }]
        }
    },
    created(){
      this.FunctionToken(this.apiGetTagFun,this.Tag_data)
        var data = {
            article_titlepage_id:sessionStorage.getItem('BlogEditState_id')
        }
        this.FunctionToken(this.apiGetArticleContentFun,data)
    },
    mounted(){
      //  window.location.reload()
      console.log(this.Article_content_data)
      console.log(this.$route.fullPath)
        this.addQuillTitle()
       
    },
    methods:{
        DeleteIamge:function(){
          this.ImageDeleteButtonShow = false
          this.FileInputeShow = true
          this.image = "";
        },
        test:function(event){
            console.log(this.Article_content_data[0].idDropDown_list)
          //  console.log(event)
        },
        apiGetArticleContentFun:function(data){  //為完代續
            this.apiGetArticleContent(data)
            .then(res=>{
                if(res.data.Status == true){
                    this.Article_content_data = res.data.Data
                    this.Tag_Select_Data.filter(x=>{
                        if(this.Article_content_data[0].Name == x.Name){
                            this.Article_content_data[0].idDropDown_list = x.idDropDown_list
                        }
                    }) 
                    this.Article_content_data = JSON.parse(JSON.stringify(this.Article_content_data)) // 深拷貝
                    this.image = this.Article_content_data[0].img_article
                    console.log(this.Article_content_data)
                }      
            })
            .catch(err=>{
                console.log(err)
            })
        },
      CheckContent:function(){
        if(this.ImageFormData.get("id_article_titlepage") == ''){
          alert("請填入id")
          return false
        }
        if(this.ImageFormData.get("content_article") == ''){
           alert("請輸入內容")
           return false
        }
        if(this.ImageFormData.get("title_article_titlepage") == ''){
          alert("請輸入標題")
          return false
        }
        if(this.ImageFormData.get("previewcontent_article_titlepage") == ''){
          alert("請輸入封面摘要")
          return false
        }
        if(this.ImageFormData.get("tag_article_titlepage" == '')){
          alert("請選擇Tag")
          return false
        }
        if(this.image == ""){
          alert("請選擇封面圖片")
          return false;
        }
        // if(this.ImageFormData.get("img_article_titlepage") == 'null'){
        //   alert("請選擇封面圖片")
        //   return false
        // }
      },
      filechange: function(e){
        console.log(e)
        //this.ImageFormData = new FormData()
        const file = e.target.files[0]
        this.image = URL.createObjectURL(file)
        this.TitleImage = file
      },
      apiGetTagFun:function(data_in){
        this.apiGetTag(data_in)
        .then(res=>{
          if(res.data.Status){
          //  this.Tag_Select_Data = JSON.parse(JSON.stringify(res.data.Data))
            this.Tag_Select_Data = res.data.Data
          }
        })
        .catch(err=>{
          console.log(err)
        })
      },
         onEditorChange($event) {
           console.log($event)
        //this.content = html
      },
      onChangeQuill: function (file,fileList) {
        console.log(file)
        console.log(fileList)
        // 獲取富文本組件實例
       // let quill = this.editor
         // console.log(e.target)
         // var form = new FormData();
         // form.append("file", e.target.files[0]);
          this.formData.append("file[]",file.name);
          //console.log(form)
          // 獲取光標所在位置
          console.log(this.$refs.myQuillEditor.quill)
          let length = this.$refs.myQuillEditor.quill.getSelection().index;
          
          // 插入圖片  data.url爲服務器返回的圖片地址，這裏爲演示url
          this.$refs.myQuillEditor.quill.insertEmbed(length, 'image', "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F10%2F29%2F2ac8e99273bc079e40a8dc079ca11b1f.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628407841&t=21353b25111601b913dd18769d2fdd0c")
          // 調整光標到最後
          this.$refs.myQuillEditor.quill.setSelection(length + 1)
          console.log(this.$refs.myQuillEditor.quill)


       // console.log("e==",e)
      },
        uploadFunction(e){
          console.log(e)
          console.log("大家好")
          var form = new FormData()
          form.append('file', e.target.files[0])
          console.log(form.get('file'))
          this.apiTranceLateImage(form)
          .then(res=>{
            console.log(res)
            //do your post
            if(res.data.Status){
            let length = this.$refs.myQuillEditor.quill.getSelection().index;
            // 插入圖片  data.url爲服務器返回的圖片地址，這裏爲演示url
            this.$refs.myQuillEditor.quill.insertEmbed(length, 'image', res.data.data)
            // 調整光標到最後
            this.$refs.myQuillEditor.quill.setSelection(length + 1)
            document.getElementById('getFile').value  = null
            }
            else{
            document.getElementById('getFile').value = null
            }
          })
          .catch(err=>{
            console.log(err)
          })
        },
        UpdateArticleContent: async function(){
           this.ImageFormData = new FormData(); //還要再研究如何好看
           this.ImageFormData.append("id_article_titlepage",this.Article_content_data[0].article_titlepage_id)
           this.ImageFormData.append("content_article",this.Article_content_data[0].content_article)
           this.ImageFormData.append("title_article_titlepage",this.Article_content_data[0].title_article_titlepage)
           this.ImageFormData.append("tag_article_titlepage",this.Article_content_data[0].idDropDown_list)
           this.ImageFormData.append("img_article_titlepage", this.TitleImage)
           this.ImageFormData.append("previewcontent_article_titlepage", this.Article_content_data[0].previewcontent_article_titlepage)
          // return false
          // console.log(this.$refs.TitleImageLoad.value)
           //return false 
          // 防呆
          if(this.CheckContent() == false){
            return false
          }
         this.FunctionToken2(this.UpdateArticlContent,this.ImageFormData)
        },
        UpdateArticlContent: function(data){
          console.log(data)
          console.log(this.ImageFormData.get('tag_article_titlepage'))
          this.apiUpdateArticlContent(data)
          .then(res=>{
            console.log(this.ImageFormData.get('tag_article_titlepage'))
            console.log(res.data)
            if(res.data.Status == true){
              //還沒寫完
             // this.ImageFormData.delete('tag_article_titlepage')
              // this.ImageFormData = new FormData()
              // this.content.content_article =""
              // this.content.title_article_titlepage = ""
              // this.content.previewcontent_article_titlepage = ""
              // this.content.tag_article_titlepage = 1
              // this.img_article_titlepage = null
              // this.$refs.TitleImageLoad.value = null
              // this.TitleImage = null
              // this.image = ''
              
              alert("更新成功")
              this.$router.push({path:'ProjectItem'})
              
            }
            else{
              // this.ImageFormData = new FormData()
              // this.content.content_article =""
              // this.content.title_article_titlepage = ""
              // this.content.previewcontent_article_titlepage = ""
              // this.content.tag_article_titlepage = 1
              // this.img_article_titlepage = null
              // this.$refs.TitleImageLoad.value = null
              // this.TitleImage = null
              // this.image = ''
              alert("發送失敗")
            }
            
            
          })
          .catch(err=>{
            this.ImageFormData = new FormData()
            console.log(err)
            alert("發送失敗")
          })
        },
        addQuillTitle:function() {
          const oToolBar = document.querySelector('.ql-toolbar'),
          aButton = oToolBar.querySelectorAll('button'),
          aSelect = oToolBar.querySelectorAll('select')
          aButton.forEach(item=>{
            if (item.className === 'ql-script') {
              item.value === 'sub' ? item.title = '下標' : item.title = '上標'
            } else if (item.className === 'ql-indent') {
              item.value === '+1' ? item.title = '向右縮進' : item.title = '向左縮進'
            } else {
              item.title = this.titleConfig[item.classList[0]]
            }
          })
          aSelect.forEach(item=>{
            item.parentNode.title = this.titleConfig[item.classList[0]]
          })
        }
    }
}
</script>
<style scoped>
.ql-container.ql-snow {
    border: 5px solid #cccc
}
</style>
