function ProfileCard({ title, handle, imagePath, description }){
    return (
        // <div>
        //     <img src={imagePath} alt={title} />
        //     <div>{title}</div>
        //     <div>{handle}</div>
        // </div>

        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imagePath} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;