import { createContext, useState } from 'react'

interface context {
  showModal: boolean
  showModalHandler: () => void
}

export const store = createContext<context>({
  showModal: false,
  showModalHandler: () => false,
})

export default function StoreProvider({ children }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false)

  const showModalHandler = () => setShowModal(prevState => !prevState)

  const ctx = {
    showModal,
    showModalHandler,
  }

  return <store.Provider value={ctx}>{children}</store.Provider>
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
