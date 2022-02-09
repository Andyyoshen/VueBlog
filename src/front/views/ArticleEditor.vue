<template>
    <!-- Two-way Data-Binding -->
  <quill-editor
    ref="myQuillEditor"
    v-model="content"
    style="height: 500px;"
    :options="editorOption"
  />
  
</template>
<script>
import { quillEditor,Quill} from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'
import 'quill/dist/quill.snow.css' // for snow theme

Quill.register('modules/imageResize', ImageResize)
//const ImageResize = require('quill-image-resize-module').default
export default {
    name:"ArticleEditor",
    components:{
        quillEditor
    },
    data(){
      return{
        content:"",
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
          },
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
             
            },
          },
          //主題
          placeholder: "請輸入正文"

        }

        }
      },
      mounted(){
        this.addQuillTitle()
      },
      methods:{
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