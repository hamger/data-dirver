/* eslint-disable */
import DD from '../../src'
import TodoTask from './TodoTask'
import NoTask from './NoTask'
import Title from './Title'
import TodoInput from './TodoInput'
/* eslint-enable */

let taskId = 0

export default new DD({
  render (h) {
    return (
      <div className="todo-wrap">
        <Title title={this.title} />
        <div className="list-wrap">
          {this.todoList.length === 0 ? (
            <NoTask noTaskInfo={this.noTaskInfo} />
          ) : (
            this.todoList.map((item, index) => (
              <TodoTask key={index} task={item} />
            ))
          )}
        </div>
        <TodoInput placeholder={'记点什么'} />
      </div>
    )
  },
  created () {
    this.$on('removeById', id => {
      for (let i = 0, len = this.todoList.length; i < len; i++) {
        if (this.todoList[i].id === id) {
          this.todoList.splice(i, 1)
          return
        }
      }
    })
    this.$on('addTodo', name => {
      this.todoList.unshift({
        id: taskId++,
        complete: false,
        taskName: name
      })
    })
  },
  data () {
    return {
      title: 'TodoList',
      todoList: [],
      // todoList: [
      //   {
      //     complete: false,
      //     id: 2,
      //     taskName: 'sdfgsg'
      //   },
      //   {
      //     complete: false,
      //     id: 3,
      //     taskName: 'zxvc'
      //   }
      // ],
      inputValue: '',
      noTaskInfo: '暂无 TodoList'
    }
  }
})
