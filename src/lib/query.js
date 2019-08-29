import config, { getId } from '../config'
import { getMethod } from '../helpers'

export default function query (method, ...args) {
  if (typeof window === 'undefined') {
    return
  }

  getId().forEach(function (id) {
    if (config.batch.enabled) {
      coll.push(t)

      if (!intr) {
        intr = setInterval(() => {
          if (!coll.length) {
            clearInterval(intr)
            intr = null
          } else {
            coll.splice(0, config.batch.amount).forEach(q => {
              window.ga(q.m, ...q.a)
            })
          }
        }, config.batch.delay)
      }
    } else {
      window.ga(getMethod(method, id), ...args)
    }
  })
}
