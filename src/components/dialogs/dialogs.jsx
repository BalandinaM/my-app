import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';
import NewMessageContainer from './newMessage/newMessageContainer';
//import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
  //debugger;
  let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem userName={d.name} key={d.id} id={d.id} hrefImg={d.hrefImg}/>);

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        { dialogsElements }
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk postData = {props.dialogsPage.postData}/>
      {/* <NewMessage dispatch = {props.dispatch} newMessageBody = {props.newMessageBody}/> */}
      <NewMessageContainer />
    </section>
  )
}

export default Dialogs;
