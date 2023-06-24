import {useState} from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followcard-button is-following' : 'tw-followcard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img className="tw-followcard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="Foto de perfil" />
                <div className="tw-followcard-info">
                    <strong>{children}</strong>
                    <span className="tw-followcard-username">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followcard-follow">{textButton}</span>
                    <span className="tw-followcard-stopfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
