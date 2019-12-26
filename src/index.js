import { forIn } from '@dword-design/functions'
import { mergeData } from 'vue-functional-data-merge'

export default (vnodes = [], data) => {
  vnodes |> forIn(node => node.data = mergeData(data, node.data ?? {}))
  return vnodes
}
