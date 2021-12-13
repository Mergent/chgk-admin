import React, { createContext, useReducer } from "react"
import { reducer, initialState } from "./reducer"

export const Context = createContext({
  state: initialState,
  dispatch: () => null
})

export const DetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[ state, dispatch ]}>
    	{ children }
    </Context.Provider>
  )
}