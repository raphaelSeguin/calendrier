const actions = {
  'SELECT': 'SELECT',
  'UNSELECT': 'UNSELECT',
  'READY': 'READY',
  'SET_EVENT_LIST': 'SET_EVENT_LIST',
  'SET_FROM_DATE': 'SET_FROM_DATE',
  'SHIFT_WEEK': 'SHIFT_WEEK'
}

export const ready = isReady => ({
  type: actions.READY,
  isReady
})

export const selectEvent = event => ({
  type: actions.SELECT,
  event
})

export const unSelect = () => ({
  type: actions.UNSELECT
})

export const setEventList = list => ({
  type: actions.SET_EVENT_LIST,
  list
})

export const setFromDate = date => ({
  type: actions.SET_FROM_DATE,
  date
})

export const shiftWeek = weeks => ({
  type: actions.SHIFT_WEEK,
  weeks
})