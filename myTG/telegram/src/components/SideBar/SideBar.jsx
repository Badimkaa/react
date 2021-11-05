import { NavLink } from 'react-router-dom'
import style from './SideBar.module.css'
const SideBar = () => {
    return (
        <aside className={style.sideBar}>
            <nav className={style.navigation}>
                <div className={style.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogs'>Dialogs</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
            </nav>
        </aside>
    )
}
export default SideBar