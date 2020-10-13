<template>
  <div class="c-question">
    <div class="question-info">
      <div class="top-row" v-if="!!level || (tags && tags.length)">
        <div class="level-info row" v-if="!!level">
          <div class="title">难度</div>
          <div class="content">
            <span class="tag">{{ level }}</span>
          </div>
        </div>
        <div class="tag-ctn row" v-if="tags && tags.length">
          <ul class="tag-list">
            <li class="tag-item" v-for="(t, idx) in tags" :key="idx">
              <span class="tag">{{ t.value }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="question-description row">
        <div class="title">题目</div>
        <div class="content description" v-html="description"></div>
      </div>
      <div class="question-params row">
        <div class="title">输入</div>
        <div class="content">
          <table>
            <thead>
              <tr>
                <th>参数名</th>
                <th>类型</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, idx) in params" :key="idx">
                <td>{{ p.name || 'undefined' }}</td>
                <td>
                  {{ p.type && p.type.names ? p.type.names.join(',') : 'any' }}
                </td>
                <td>{{ p.description || 'undefined' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="question-returns row">
        <div class="title">输出</div>
        <div class="content">
          <table>
            <thead>
              <tr>
                <th>类型</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, idx) in returns" :key="idx">
                <td>
                  {{ r.type && r.type.names ? r.type.names.join(',') : 'any' }}
                </td>
                <td>{{ r.description || 'undefined' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="code">
      <Codemirror v-if="openCode" :value="question.code" :options="cmOptions" />
      <a
        class="toggle-code-btn"
        href=""
        @click.prevent="openCode = !openCode"
        >{{ openCode ? `收起代码 ↑` : '查看代码 ↓' }}</a
      >
    </div>
  </div>
</template>

<script>
import { codemirror as Codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
export default {
  components: {
    Codemirror
  },
  props: {
    question: {}
  },
  data() {
    return {
      openCode: false,
      cmOptions: {
        theme: 'monokai',
        mode: 'text/javascript',
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        styleSelectedText: true,
        disableInput: true,
        lineWrapping: true,
        foldGutter: true
      }
    }
  },
  computed: {
    description() {
      return this.question.comment.description
    },
    params() {
      return this.question.comment.params
    },
    returns() {
      return this.question.comment.returns
    },
    level() {
      let tags = this.question.comment.tags || []
      let levelTag = tags.find(i => i.title === 'level')
      return levelTag ? levelTag.value : null
    },
    tags() {
      let tags = this.question.comment.tags || []
      return tags.filter(i => i.title === 'tag')
    }
  }
}
</script>

<style lang="css">
@import '~codemirror/lib/codemirror.css';
@import '~codemirror/theme/monokai.css';

pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>

<style lang="css" scoped>
.c-question {
  padding: 15px 0;
}
.row {
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
}

.top-row {
  justify-content: space-between;
}
.content {
  flex-grow: 1;
  flex-shrink: 1;
  max-width: calc(100% - 32px);
}

table {
  width: 100%;
}

.title {
  flex-shrink: 0;
  margin-right: 8px;
  font-weight: bold;
  color: #666;
}

th {
  font-weight: bold;
}

td,
th {
  min-width: 90px;
  padding: 5px;
  border: 1px solid #ccc;
}

td:not(:first-child),
th:not(:first-child) {
  border-left: none;
}

thead tr:last-child th {
  border-bottom: none;
}

tbody tr:not(:first-child) td {
  border-top: none;
}

.question-params .title,
.question-returns .title {
  padding: 5px 0;
}

.toggle-code-btn {
  color: #00965e;
  display: block;
  text-align: center;
  text-decoration: none;
}

.toggle-code-btn:hover {
  color: #004a2e;
}

.toggle-code-btn:visited {
  color: #00965e;
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.top-row {
  display: flex;
  justify-content: space-between;
}

.tag-list {
  display: flex;
}
.tag-item {
  margin-left: 4px;
}
</style>
