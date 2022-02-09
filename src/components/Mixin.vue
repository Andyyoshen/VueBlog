<script>
export default {
  name: "Mixin",
  data() {
    return {
      userRequest: this.$axios.create({ baseURL: "/api2" }),
      TokenID: "",
      MixnaccountData: null,
      apiToken: (data) => this.userRequest.post("/CryptionTest",data),
      apiGetArticleContent:(data) =>
      this.userRequest.post("/GetArticleContent",data),
      apiGetArticleTitle:(data) =>
      this.userRequest.post("/GetArticleTitle",data)
    };
  },
  mounted() {
    this.TokenID = sessionStorage.getItem("TokenID");
  },
  methods: {
    FunctionToken:function(EXfunction,data_in){
        EXfunction(EXfunction)
        // this.apiToken({})
        //  .then(res=>{
        //      data_in.TokenID = this.TokenID
        //      data_in.Token = res.data;
        //      EXfunction(data_in)
        //  })
        //  .catch(err=>{
        //      console.log("發生錯誤"+ err)
        //  })
    }
  },
};
</script>