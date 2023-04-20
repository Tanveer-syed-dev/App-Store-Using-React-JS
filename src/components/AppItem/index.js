// Write your code here
import './index.css'

const AppItem = props => {
  const {appListDetails} = props
  const {appName, imageUrl} = appListDetails

  return (
    <li className="app-items-list">
      <img src={imageUrl} alt={appName} className="images" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
