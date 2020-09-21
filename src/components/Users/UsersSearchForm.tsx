import {Field, Form, Formik} from 'formik'
import React, {FC} from 'react'
import {FilterType} from '../../redux/usersReducer'
import style from './Users.module.sass'

type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
// debugger
export const UserSearchForm: FC<PropsType> = React.memo((props) => {
  return <div>
    <Formik
      initialValues={{term: '', friend: 'null'}}
      validate={values => {
        const errors = {}
        return errors
      }}
      onSubmit={(values: FormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
          term: values.term,
          friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
      }}
    >
      {({isSubmitting}) => (
        <Form className={style.formsBody}>
          <Field type="text" name="term"/>
          <Field name="friend" as="select">
            <option value="null">All</option>
            <option value="true">Only subscribe</option>
            <option value="false">Only unsubscribe</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  </div>
})