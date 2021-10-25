import { useContext } from 'react'
import { store } from '../../context/store'
import FormBtn from '../form-btn/form-btn'
import FormTitle from '../form-title/form-title'
import Input from '../input/input'
import Modal from '../modal/modal'

export default function AddNewPhoto() {
  const { showModalHandler } = useContext(store)
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <Modal onClickHandler={showModalHandler}>
      <FormTitle text='Add a new photo' />
      <form onSubmit={onSubmitHandler}>
        <Input type='text' label='Label' placeholder='Add a label' />
        <Input type='text' label='Photo URL' placeholder='Enter your photo URL' />
        <div className='text-right'>
          <FormBtn text='Cancel' onClickHandler={showModalHandler} />
          <FormBtn text='Submit' />
        </div>
      </form>
    </Modal>
  )
}
