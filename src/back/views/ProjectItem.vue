<template>
    <div class="wrapper">
  <!-- Main Sidebar Container -->
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Projects</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Projects</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Projects</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <div>
            <b-table  striped hover 
                      ref="table"
                      :items="TotalLogCardData"
                      :fields="TotalLogCardData_Fields"
                      :per-page="perPage"
                      :current-page="currentPage">
              <template v-slot:cell(action)="row">
                    <a
                      class="btn btn-danger mr-3 mb-3"
                      @click="DeleteTitle(row.item)"
                    >刪除</a>
                    <a
                      class="btn btn-warning mb-3"
                      @click="UpdateBloContent(row.item)"
                    >編輯</a>
              </template>
              <template v-slot:cell(type_article_titlepage)="row">
                    <span
                    >{{TypeTranch(row)}}</span>
              </template>
            </b-table>
              <b-pagination
              v-model="currentPage"
              :total-rows="TotalLogCardData_Length" 
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
    </div>
</template>
<script>
import "../../../public/plugins/fontawesome-free/css/all.min.css"

//----------------------------
import "../../../public/plugins/jquery/jquery.min.js"
import "../../../public/plugins/bootstrap/js/bootstrap.bundle.min.js"
//import "../../../public/dist/js/demo.js"
export default {
    name:"ProjectItem",
    data(){
      return {
        perPage: 10, // 資料行數
        currentPage: 1, //初始頁碼
        TotalLogCardData_Length:null,
        fields: ['key','first_name', 'last_name', 'show_details','action'],
        items: [
          { key:"a",age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { key:"b",age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { key:"c",age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { key:"d",age: 38, first_name: 'Jami', last_name: 'Carney' },
          { key:"e",age: 38, first_name: 'Jami', last_name: 'action' }
        ],
        TotalLogCardData_Fields:['id_article_titlepage','title_article_titlepage','Name','type_article_titlepage','date_article_titlepage','action'],
        TotalLogCardData:null,
        type_article_titlepage_Data:{ 
          type_article_titlepage:"Normal"  //傳入參數Normal，取得正常的blog封面
        },
      }
    },
    created:function(){
      this.FunctionToken(this.apiGetArticleTitleNoWhereFun,this.type_article_titlepage_Data)
    },
    methods:{
      UpdateBloContent: function(row){
         this.$store.commit('EditArticle',row.id_article_titlepage)
         this.$router.push({path:'BlogEdit'})
        console.log(row)
      },
      TypeTranch: function(row){
        var showData = null
        switch(row.item.type_article_titlepage){
          case "Normal" :
            showData =  "正常狀態"
            break;
          case "Delete" :
           showData =  "刪除狀態"
            break;
        }
        return showData
        //console.log(data)

      },
      apiGetArticleTitleNoWhereFun:  function(data_in){
          this.apiGetArticleTitleNoWhere(data_in)
          .then(res=>{
              if(res.data.Status){           
                  this.TotalLogCardData = res.data.Data
                  this.TotalLogCardData_Length = this.TotalLogCardData.length                  
              }
          })
          .catch(err=>{
              console.log(err)
          })
      },
      DeleteTitle: function(data_in){
        // console.log(this.$refs.table.refresh())
        console.log(data_in.id_article_titlepage)
        var DTO = {
          id_article_titlepage:data_in.id_article_titlepage
        }
        this.FunctionToken(this.apiDeleteArticleTitleFun,DTO)
        //this.$refs.table.refresh();
      },
      apiDeleteArticleTitleFun:function(data_in){
        this.apiDeleteArticleTitle(data_in)
        .then(res=>{
          console.log(res.data)
          if(res.data.Status == true){
            //alert("您已刪除")
            this.TotalLogCardData = res.data.Data
            this.TotalLogCardData_Length = this.TotalLogCardData.length    
            alert("刪除成功") 
            //console.log(this.$refs.table.refresh())
          }
          
        })
        .catch(err=>
        console.log(err))
      }
    }
    
}
</script>