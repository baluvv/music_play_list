import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {trackItemDetails, onDeleteTrackItem} = props
  const {id, imageUrl, name, genre, duration} = trackItemDetails

  const onClickDeleteTrackItem = () => {
    onDeleteTrackItem(id)
  }
  return (
    <li className="track-item">
      <div className="img-container">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickDeleteTrackItem}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
