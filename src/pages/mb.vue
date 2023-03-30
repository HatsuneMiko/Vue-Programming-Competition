<template>
  <div>
    <div ref="editorContainer" class="editor"></div>
    <div>
      <el-button type="primary" @click="onMoban" style="margin-left: 30px;float: left">模板</el-button>
      <el-button type="primary" @click="onSave" style="">保存</el-button>
      <el-button type="primary" @click="onSubmit" style="margin-left: 10px">提交</el-button>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
export default {
  name: 'MonacoEditor',
  data() {
    return {
      code: localStorage.getItem('ytj'),
      editor: null,
    }
  },
  created(){

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 初始化编辑器
      this.editor = monaco.editor.create(this.$refs.editorContainer, {
        value: this.code,
        language: localStorage.getItem('lg'),
        tabSize: 2,
        scrollBeyondLastLine: false,
        automaticLayout: true, // 自动布局
        readOnly: false
      })

      // 监听内容变化
      this.editor.onDidChangeModelContent(() => {

      })

      // 监听失去焦点事件
      this.editor.onDidBlurEditorText((e) => {
        console.log(e)
      });
    },
    // 获取编辑框内容
    getCodeContext() {
      return this.editor.getValue()
    },
    // 自动格式化代码
    format() {
      this.editor.trigger('anything', 'editor.action.formatDocument')
      // 或者
      // this.editor.getAction(['editor.action.formatDocument']).run()
    },
    changeEditor() {
      if (this.editor === null) {
        this.init()
      }

      const oldModel = this.editor.getModel()
      const newModel = monaco.editor.createModel(
          this.code,
          localStorage.getItem('lg')
      )
      if (oldModel) {
        oldModel.dispose()
      }
      this.editor.setModel(newModel)
    },
    onMoban(){
      //生成模板
      this.editor.setValue('生成模板')
    },
    onSave(){
      console.log(this.editor.getValue())
      localStorage.setItem('ytj',this.editor.getValue())
      //this.editor.setValue(this.editor.getValue())
    }
  }
}
</script>

<style scoped>
.editor {
  width: 100%;
  min-height: 400px;
  text-align: left;
}
</style>
