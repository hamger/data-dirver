/* eslint-disable */
import DD from '../../src/index'
// import TodoTask from './TodoTask'
// import NoTask from './NoTask'
import Title from './Title'
// import TodoInput from './TodoInput'
/* eslint-enable */

// export default new DD({
//   render (h) {
//     let todoList = this.todoList.map(item => <TodoTask task={item} />)
//     if (todoList.length === 0) {
//       todoList = <NoTask noTaskInfo={this.noTaskInfo} />
//     }
//     return (
//       <div className="todo-wrap">
//         <Title title={this.title} />
//         <div className="item-wrap">{todoList}</div>
//         <TodoInput placeholder={'记点什么'} />
//       </div>
//     )
//   },
//   created () {
//     this.$on('removeById', id => {
//       for (let i = 0, len = this.todoList.length; i < len; i++) {
//         if (this.todoList[i].id === id) {
//           this.todoList.splice(i, 1)
//           return
//         }
//       }
//     })
//     this.$on('toggleTaskType', task => {
//       for (let i = 0, len = this.todoList.length; i < len; i++) {
//         if (this.todoList[i].id === task.id) {
//           this.todoList[i].complete = !task.complete
//           return
//         }
//       }
//     })
//     this.$on('addTodo', name => {
//       this.todoList.unshift({
//         id: this.todoList.length,
//         complete: false,
//         taskName: name
//       })
//     })
//   },
//   data () {
//     return {
//       title: 'DD with jsx TodoList',
//       todoList: [],
//       inputValue: '',
//       noTaskInfo: '暂无 TodoList'
//     }
//   }
// })
export default new DD({
  render (h) {
    return (
      <div>
        <h2>{this.title}</h2>
        <Title title={this.title} />
        <div onclick={this.save.bind(this)}>CHANGE</div>
      </div>
    )
  },
  data () {
    return {
      title: 'Hello World!'
    }
  },
  methods: {
    save () {
      this.title += '!'
      console.log(this.title)
    }
  }
})
