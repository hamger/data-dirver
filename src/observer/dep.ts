import { remove } from '../util/util'
import Watcher from './watcher'

let id = 0

export default class Dep {
  static target?: Watcher
  id: number
  watchers: Array<Watcher>

  constructor() {
    this.id = id++
    this.watchers = []
  }

  addWatcher(watcher: Watcher) {
    this.watchers.push(watcher)
  }

  removeWatcher(watcher: Watcher) {
    remove(this.watchers, watcher)
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    this.watchers.forEach(watcher => {
      watcher.update()
    })
  }
}

// targetStack 是为了防止监听嵌套结构时，丢失父辈 watcher
const targetStack: Array<Watcher> = []

export function pushTarget(_target: Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget() {
  Dep.target = targetStack.pop()
}
