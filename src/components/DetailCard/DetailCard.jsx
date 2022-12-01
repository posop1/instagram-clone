import { useState } from 'react'
import Comment from '../Comment/Comment'
import { UserBadge } from '../UserBadge/UserBadge'
import s from './DetailCard.module.scss'

const DetailCard = ({ userName, avatarUrl, userId, imgUrl, likes, isLikedByYou, comments }) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false)

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShown) {
      const commentsCopy = [...comments]
      const commentForRender = commentsCopy.splice(comments.length - 2, 2)

      return (
        <>
          <span
            className={s.MoreComment}
            onClick={() => setIsCommentsShown(true)}
          >{`Показать еще ${comments.length - commentForRender.length} комментариев...`}</span>
          {commentForRender.map((comment, i) => (
            <Comment
              {...comment}
              key={i}
            />
          ))}
        </>
      )
    }

    return comments.map((comment, i) => (
      <Comment
        {...comment}
        key={i}
      />
    ))
  }

  return (
    <div className={s.DetailCard}>
      <div className={s.Badge}>
        <UserBadge
          nickName={userName}
          avatarUrl={avatarUrl}
          id={userId}
        />
      </div>
      <div className={s.Image__container}>
        <img
          src={imgUrl}
          alt="img"
          className={s.img}
        />
      </div>
      <div className={s.Buttons}>
        <i className={isLikedByYou ? 'fas fa-heart' : 'far fa-heart'} />
        <i className="far fa-comment" />
      </div>
      <div className={s.Likes}>
        <p>Оценили {likes} человек</p>
      </div>
      <div className={s.comments}>{renderComments()}</div>
      <input
        placeholder="commet..."
        className={s.inp}
      />
    </div>
  )
}

export default DetailCard
