import {context} from './context'

const ContextTheme = ({children}) => {
  return (
    <context.Provider value={}>
      {children}
    </context.Provider>
  )
}

export default ContextTheme