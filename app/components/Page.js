import Link from 'next/link'
import { connect } from 'react-redux'
import AddCount from './AddCount'

export default connect(state => state)(
  ({ title, linkTo, lastUpdate, light }) => {
    return (
      <div>
        <h1>{title}</h1>
        <AddCount />
        <nav>
          <Link href={linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
)