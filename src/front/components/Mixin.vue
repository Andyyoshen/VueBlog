<script>
export default {
  name: "Mixin",
  data() {
    return {
      userRequest: this.$axios.create({ baseURL: "/api2" }),
      TokenID: "",
      MixnaccountData: null,
      apiToken: (data) =>  this.userRequest.post("/CryptionTest",data),
      apiGetArticleTitle:(data) =>
      this.userRequest.post("/GetArticleTitle",data),
      apiGetArticleContent:(data)=>
      this.userRequest.post("/GetArticleContent",data),
      apiSearchArticle:(data)=>
      this.userRequest.post("/SearchArticle",data),
      apiGetTag:(data) =>
      this.userRequest.post("/GetTag",data),
      apiGetTopArtitcle_TitleNew:(data) =>
      this.userRequest.post("/GetTopArtitcle_TitleNew",data),
      apiInsertClientIp:(data) =>
      this.userRequest.post("/InsertClientIp",data)
    };
  },
  mounted() {
    this.TokenID = sessionStorage.getItem("TokenID");
  },
  methods: {
    FunctionToken:async function(EXfunction,data_in){
       await this.apiToken({})
         .then(async res=>{
              if(res.data.Status){
                var DTO={
                  U_data: data_in,
                  Token_data: {
                     // TokenID: this.TokenID,  //權限ID
                      Token: res.data.Data,
                    },
                }
                console.log(DTO)
                EXfunction(DTO)
              }
             
         })
         .catch(err=>{
             console.log("發生錯誤"+ err)
         })
    },
  },
};
</script>