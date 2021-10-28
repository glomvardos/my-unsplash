import React, { useContext, useState } from 'react'
import { store } from '../../context/store'
import FormBtn from '../form-btn/form-btn'
import FormTitle from '../form-title/form-title'
import Input from '../input/input'
import Modal from '../modal/modal'

export default function AddNewPhoto() {
  const { showModalHandler } = useContext(store)
  const [label, setLabel] = useState<string>('')
  const [imgUrl, setImgUrl] = useState<string>('')
  const [labelIsReq, setLabelIsReq] = useState<boolean>(false)
  const [imgUrlIsReq, setImgUrlIsReq] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    setErrorMessage('')

    if (label.trim() === '' || imgUrl.trim() === '') {
      setLabelIsReq(true)
      setImgUrlIsReq(true)
      return
    }

    try {
      const response = await fetch('/api/postImage', {
        method: 'POST',
        body: JSON.stringify({
          label,
          imgUrl,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setLabelIsReq(false)
        setImgUrlIsReq(false)
        showModalHandler()
      }
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message.error.message)
      }
    } catch (err: any) {
      setErrorMessage(err.message)
    }
  }

  const onBlurHandlerLabel = () => {
    if (label.trim() === '') setLabelIsReq(true)
  }

  const onBlurHandlerImgUrl = () => {
    if (imgUrl.trim() === '') setImgUrlIsReq(true)
  }

  const onFocusHandler = () => {
    if (label.trim() === '') setLabelIsReq(false)
    if (imgUrl.trim() === '') setImgUrlIsReq(false)
  }

  return (
    <Modal onClickHandler={showModalHandler}>
      <FormTitle text='Add a new photo' />
      <form onSubmit={onSubmitHandler}>
        <Input
          type='text'
          label='Label'
          placeholder='Add a label'
          value={label}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
          onBlurHandler={onBlurHandlerLabel}
          onFocusHandler={onFocusHandler}
          isRequired={labelIsReq}
        />
        <Input
          type='text'
          label='Photo URL'
          placeholder='Enter your photo URL'
          value={imgUrl}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => setImgUrl(e.target.value)}
          onBlurHandler={onBlurHandlerImgUrl}
          onFocusHandler={onFocusHandler}
          isRequired={imgUrlIsReq}
        />
        <div className='text-right'>
          <p className='text-sm text-left text-[#ff4136]'>{errorMessage}</p>
          <FormBtn text='Cancel' onClickHandler={showModalHandler} />
          <FormBtn text='Submit' onClickHandler={() => null} />
        </div>
      </form>
    </Modal>
  )
}
