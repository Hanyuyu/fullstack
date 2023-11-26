const Notification = ({message, success}) => {
    if(!message){
        return null;
    }

    return (
        <div className={success ? 'notification success' : 'notification error'}>
            {message}
        </div>
    )
}

export default Notification;
