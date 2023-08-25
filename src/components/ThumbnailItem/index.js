// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageList, updateImage, isClicked} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageList

  const onUpdateImage = () => {
    updateImage(id)
  }

  const buttonStyle = isClicked ? 'clicked-btn' : 'button'

  return (
    <li className="list-item">
      <button
        type="button"
        className={`${buttonStyle}`}
        onClick={onUpdateImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
