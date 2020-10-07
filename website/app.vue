<template>
  <div class="main-container">
    <div class="title">
      Questions
    </div>
    <div class="sort-ctn">
      <form class="sort-form" action="/">
        <div>
          <label for="level">难度</label>
          <select name="level" id="level" v-model="selectLevel">
            <option
              v-for="(l, idx) in levelQuery"
              :key="idx"
              :value="l.value"
              >{{ l.label }}</option
            >
          </select>
        </div>
        <div>
          <label for="level">标签</label>
          <select name="tag" id="tag" v-model="selectTag">
            <option v-for="(l, idx) in tagQuery" :key="idx" :value="l.value">{{
              l.label
            }}</option>
          </select>
        </div>
      </form>
    </div>
    <div class="question-list">
      <Question
        v-for="(q, idx) in sortedQuestion"
        :key="idx"
        :question="q"
        class="question-item"
      />
    </div>
  </div>
</template>

<script>
import questions from './get-questions'
import Question from './components/question'

export default {
  components: {
    Question
  },
  data() {
    return {
      questions,
      selectLevel: '',
      selectTag: ''
    }
  },
  computed: {
    questionsCount() {
      return this.questions.length
    },
    levelQuery() {
      return (this.questions || []).reduce(
        (result, q) => {
          let tags = q.comment.tags || []
          tags.forEach(t => {
            if (t.title === 'level') {
              if (result.every(r => r.value !== t.value)) {
                result.push({ label: t.value, value: t.value })
              }
            }
          })
          return result
        },
        [{ label: '全部', value: '' }]
      )
    },
    tagQuery() {
      return (this.questions || []).reduce(
        (result, q) => {
          let tags = q.comment.tags || []
          tags.forEach(t => {
            if (t.title === 'tag') {
              if (result.every(r => r.value !== t.value)) {
                result.push({ label: t.value, value: t.value })
              }
            }
          })
          return result
        },
        [{ label: '全部', value: '' }]
      )
    },
    sortedQuestion() {
      return this.questions.filter(q => {
        let tags = q.comment.tags || []
        if (this.selectLevel && tags.every(t => t.value !== this.selectLevel)) {
          return false
        }

        if (this.selectTag && tags.every(t => t.value !== this.selectTag)) {
          return false
        }
        return true
      })
    }
  }
}
</script>
<style lang="css">
@import '~normalize.css';

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

table {
  border-spacing: 0;
}

th {
  font-weight: normal;
}

th,
td {
  text-align: left;
}
</style>

<style lang="css" scoped>
.main-container {
  width: 80vw;
  max-width: 1200px;
  min-width: 600px;
  margin: 0 auto;
}

.title {
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
}

.sort-form {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.sort-form label {
  margin-right: 12px;
}

.question-item:not(:first-child) {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}
</style>
