// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addCategory } from '../store/action'
import { useDispatch } from 'react-redux'

const SidebarNewCategory = ({ open, toggleSidebar }) => {
  // ** States
  const [categoryStatus, setStatus] = useState('active')
  const [plan, setPlan] = useState('basic')

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addCategory({
          categoryName: values['category-name'],
          status: categoryStatus
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Category'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='category-name'>
            Category Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='category-name'
            id='category-name'
            placeholder='John Doe'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['category-name'] })}
          />
        </FormGroup>
       
        
        <FormGroup>
          <Label for='status'>Status</Label>
          <Input type='select' id='status' name='status' value={status} onChange={e => setStatus(e.target.value)}>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </Input>
        </FormGroup>
       
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewCategory
