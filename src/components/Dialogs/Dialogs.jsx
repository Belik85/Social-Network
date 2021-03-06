import React from 'react';
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>);

    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    // let d = {
    //     id: 1,
    //     name: 'Dimych'
    // };
    //
    // let v = {
    //     id: 2,
    //     name: 'Vitalii'
    // };
    //
    // let l = {
    //     id: 3,
    //     name: 'Lesha'
    // };
    //
    // let w = {
    //     id: 4,
    //     name: 'Witya'
    // };
    //
    // let k = {
    //     id: 5,
    //     name: 'Karolina'
    // };
    //
    // let y = {
    //     id: 6,
    //     name: 'Yana'
    // };


    return (

        <div className={d.dialogs}>
            <div className={d.dialogsItems}>

                {/*<img src = 'https://www.incimages.com/uploaded_files/image/1920x1080/social-networking-184313840_384936.jpg'/>*/}
                {/*<DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>*/}
                {/*<DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>*/}

                {dialogsElements}

            </div>

            <div className={d.messages}>

                {/*<Message message={messagesData[0].message}/>*/}
                {/*<Message message={messagesData[1].message}/>*/}

                {messagesElements}

            </div>

        </div>


    )
}

export default Dialogs;



















