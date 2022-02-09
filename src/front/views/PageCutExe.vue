<template>
    <div>
        <h1>01</h1>
    <div class="wrap sample1">
        <table>
            <tr>
                <td class="pic">
                    <img src="https://picsum.photos/30/30?random=1">
                </td>
                <td>
                    <h2>阿莫斯の網頁料理室 : 煩ㄟ! 切版好難! 我不會切版啦! ?</h2>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <p>
                    『這個畫面要怎麼切? 』這大概是 Amos 最常被問到的問題了，
                    此外一個經常被問到的則是『我這樣切對不對?』，
                    而我的回覆也都差不多是一樣的『這樣切OK啊 ! 』，
                    但同個畫面，兩三個不同人切出來的不同code為何都是同樣的回答呢? 
                    就讓我們用影片一次解答這個問題吧。</p>
                </td>
            </tr>
        </table>
    </div>
    </div>
</template>
<script>
export default {
    name:'PageCutExe' ,
    
}
</script>
<style scoped>
 *{
     margin:0;
     padding: 0;
     list-style: none;
 }
 h1{
     margin: 30px;
 }
 .wrap{
     margin: 30px;
     border: 1px solid #aaa;
 }
 h2{
     font-size: 24px;
     line-height: 1.3;
     padding-bottom: .4em;
 }
 .pic{
     padding-right: 10px;
 }
 .pic img{
     border-radius: 50%;
 }
 .sample1 .pic{
     vertical-align: top;
 }
</style>