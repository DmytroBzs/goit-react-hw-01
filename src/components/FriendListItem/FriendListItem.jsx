
import clsx from 'clsx'
import css from './FriendListItem.module.css'
export default function FriendListItem({avatar, name, isOnline}){
return (
  <div className={css.container}>
  <img className={css.avatar} src={avatar} alt="Avatar" width="100" />
  <p className={css.name}>{name}</p>
  <p className={clsx(isOnline ? css.online : css.offline)}>{isOnline ? 'Online' : 'Offline'}</p>
</div>

)
}