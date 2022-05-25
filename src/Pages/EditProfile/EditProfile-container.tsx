import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditProfileView from './EditProfile-view';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from 'typescript-cookie';
import { editProfileData } from '../../store/actions/edit-actions';
import { dispatchStore, RootState } from '../../types/types';
import { deleteUserProfile } from "../../store/actions/deleteUser-actions";


const EditProfileContainer = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = getCookie("id");
  const {name, login, password} = useSelector((state: RootState) => state.edit);

  const onFinish = () => {
   const userData = {
     name,
     login,
     password,
    }
    dispatchStore(editProfileData(userData, userId))
  };
  const deleteUserModalHandler = () => {
    dispatchStore(deleteUserProfile(userId));
    removeCookie("jwt");
    removeCookie("id");
    navigate("/");
  }

  const deleteClickHandler = () => {
    setShowModal(true);
   }

   const modalHandler = () => {
     setShowModal(false);
   }

  return  (
    <EditProfileView
    onFinish={onFinish}
    dispatch={dispatch}
    deleteClickHandler={deleteClickHandler}
    modalHandler={modalHandler}
    showModal={showModal}
    deleteUserModalHandler={deleteUserModalHandler}
  />
  )
};

export default EditProfileContainer;
