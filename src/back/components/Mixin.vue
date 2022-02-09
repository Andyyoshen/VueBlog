<script>
export default {
  name: "Mixin",
  data() {
    return {
      userRequest: this.$axios.create({ baseURL: "/api2" }),
      TokenID: "",
      MixnaccountData: null,
      apiToken: (data) => this.userRequest.post("/CryptionTest",data),
      apiInsertArticlContent:(data) => 
      this.userRequest.post("/InsertArticlContent",data),
      apiUpdateArticlContent:(data) => 
      this.userRequest.post("/UpdateArticlContent",data),
      apiTranceLateImage:(data) =>
      this.userRequest.post("/TranceLateImage",data),
      apiGetArticleContent:(data) =>
      this.userRequest.post("/GetArticleContent",data),
      apiGetTag:(data) =>
      this.userRequest.post("/GetTag",data),
      apiGetArticleTitle:(data) =>
      this.userRequest.post("/GetArticleTitle",data),
      apiGetArticleTitleNoWhere:(data) =>
      this.userRequest.post("/GetArticleTitleNoWhere",data),
      apiDeleteArticleTitle:(data) =>
      this.userRequest.post("/DeleteArticleTitle",data),
      apiGetArticleContent:(data)=>
      this.userRequest.post("/GetArticleContent",data),
    };
  },
  mounted() {
    this.TokenID = sessionStorage.getItem("TokenID");
  },
  methods: {
    FunctionToken:function(EXfunction,data_in){
        this.apiToken({})
         .then(res=>{
           console.log(res)
              if(res.data.Status){
                var DTO={
                  U_data: data_in,
                  Token_data: {
                     // TokenID: this.TokenID,  //權限ID
                      Token: res.data.Data,
                    },
                }
                EXfunction(DTO)
              }
             
         })
         .catch(err=>{
             console.log("發生錯誤"+ err)
         })
    },
    FunctionToken2: function (EXfunction, data_in) {
      this.apiToken({})
        .then((res) => {
          //data_in.append("TokenID", this.TokenID);
          data_in.append("Token", res.data.Data);
          EXfunction(data_in);
        })
        .catch((error) => {
          console.log("發生錯誤!" + error);
        });
    },
  },
};
</script>