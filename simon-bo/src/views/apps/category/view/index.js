// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getCategory } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'
import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

const CategoryView = props => {
  // ** Vars
  const store = useSelector(state => state.categories),
    dispatch = useDispatch(),
    { id } = useParams()
  console.log(store)
  // ** Get suer on mount
  useEffect(() => {
    dispatch(getCategory(parseInt(id)))
  }, [dispatch])

  return store.selectedCategory !== null && store.selectedCategory !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          {/* <UserInfoCard selectedUser={store.selectedCategory} /> */}
        </Col>
        <Col xl='3' lg='4' md='5'>
          {/* <PlanCard selectedUser={store.selectedCategory} /> */}
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <UserTimeline />
        </Col>
        <Col md='6'>
          <PermissionsTable />
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default CategoryView
