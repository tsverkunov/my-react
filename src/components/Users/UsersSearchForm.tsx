import {Field, Form, Formik} from 'formik'
import React, {FC} from 'react'
import {FilterType} from '../../redux/usersReducer'
import style from './Users.module.sass'
import {useSelector} from 'react-redux'
import {getUsersFilter} from '../../redux/usersSelectors'
import {Button} from '@material-ui/core'

type FormType = {
  term: string
  friend: FriendFormType
}

type FriendFormType = 'true' | 'false' | 'null'

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UserSearchForm: FC<PropsType> = React.memo((props) => {

  const filter = useSelector(getUsersFilter)


  return <div>
    <Formik
      enableReinitialize
      initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
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