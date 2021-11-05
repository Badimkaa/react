import DialogItem from "./DialogItem/DialogItem"

const Dialogs = (props) => {
    let allMessages = props.dialogsPage.messages.map(m => <DialogItem name={m.name} id={m.id} avatar={m.avatar}/>)
    return (
        <div>
            <div className='messages'>
                {allMessages}
            </div>
        </div>
    )
}
export default Dialogs
