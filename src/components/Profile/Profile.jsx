import css from "./Profile.module.css"
export default function Profile({ username, tag, location, avatar, stats}){
  return (
    <div className={css.container}>
  <div className={css.box}>
    <img className={css.avatar}
      src={avatar}
      alt="User avatar"
    />
    <p className={css.username}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span className={css.number}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span className={css.number}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span className={css.number}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}