import React, {FC} from 'react'
import style from './AddMessage.module.sass'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'
import {CustomTextarea} from '../../../common/FormsControls/FormsControls'
import {Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

type LoginFormValues = {
  message: string
}
type FormPropsTypes = {
  onSubmit: (values: LoginFormValues) => void
}
const AddMessageForm: FC<FormPropsTypes> = ({onSubmit}) => {
  const initialValues: LoginFormValues = {
    message: ''
  }
  return (
    <>
      <Formik initialValues={initialValues}
              validationSchema={Yup.object({
                message: Yup.string()
                  .max(300, 'Must be 300 characters or less'),
              })
              }
              onSubmit={(values, {resetForm}) => {
                setTimeout(() => {
                  onSubmit(values)
                  resetForm()
                  // setSubmitting(false);
                }, 300)
              }}
      >
        {(props) => (
          <Form className={style.newPost}>
            <CustomTextarea name="message"
                            placeholder="new message..."
                            className={style.newMessage}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={style.buttonSend}
              endIcon={<SendIcon/>}
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? 'Sending...' : 'Send'}
            </Button>

            {/*<button type="submit"*/}
            {/*        disabled={props.isSubmitting}*/}
            {/*        className={style.buttonSend}*/}
            {/*>*/}
            {/*  {props.isSubmitting ? 'Sending...' : 'Send'}*/}
            {/*</button>*/}
          </Form>
        )}
      </Formik>
    </>
  )
}


type PropsType = {
  addMessage: (message: string) => void
}
const AddMessageFormik: FC<PropsType> = ({addMessage}) => {
  let onSubmit = (values: LoginFormValues) => {
    // alert(JSON.stringify(values, null, 2));
    addMessage(values.message)
  }
  return (
    <AddMessageForm onSubmit={onSubmit}/>
  )
}

export default AddMessageFormik