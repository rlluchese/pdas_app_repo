function ProfileCard(props){
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.handle}</div>
        </div>
    );
}

export default ProfileCard;