import React, { useEffect, useState } from 'react';

import axiosWithAuth from '../helpers/axiosWithAuth';
import Bubbles from './Bubbles';
import ColorList from './ColorList';
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const fetchColors = () => fetchColorService().then((res) => setColors(res));

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    console.log(editColor);
    axiosWithAuth()
      .put(`/colors/${editColor.id}`, editColor)
      .then((res) => fetchColors())
      .catch((err) => console.log(err));
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then((res) => fetchColors())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <div className='container'>
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
