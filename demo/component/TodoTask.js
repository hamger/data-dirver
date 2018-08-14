import DD from '../../src'

let TodoTask = DD.extend({
  render (h) {
    return (
      <div className="todo-item">
        <div className="col-1 row">
          <input
            type="checkbox"
            value={this.task.complete}
            onchange={() => (this.task.complete = !this.task.complete)}
          />
        </div>
        <div className={this.task.complete ? 'col-2 on' : 'col-2'}>
          {this.task.taskName}
        </div>
        <div className="col-3">
          <span className="btn" onclick={this.remove.bind(this, this.task.id)}>
            删除
          </span>
        </div>
      </div>
    )
  },
  props: {
    task: {
      type: Object,
      default: {}
    }
  },
  methods: {
    remove (id) {
      this.$emit('removeById', id)
    }
  }
})

export default TodoTask
