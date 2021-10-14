import { useContext } from 'react'
import { store } from '../../context/store'
import Input from '../input/input'
import Modal from '../modal/modal'

export default function AddNewPhoto() {
  const { showModalHandler } = useContext(store)

  return (
    <Modal onClickHandler={showModalHandler}>
      <h2>Add a new photo</h2>
      <form>
        <Input type='text' label='Label' />
        <Input type='text' label='Photo URL' />
      </form>
    </Modal>
  )
}
