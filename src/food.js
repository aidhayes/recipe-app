import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';

function Recipe(){
     return(
      <div className='recipes'>
        <h1>Scrambled eggs</h1>
        <ol>
          <li>8 eggs</li>
          <li>Salt</li>
          <li>Black Pepper</li>
        </ol>
        <h1>French fries</h1>
        <ol>
          <li>2 pounds of Potatoes</li>
          <li>vegtable oil</li>
          <li>All purpose flour</li>
          <li>Garlic salt</li>
          <li>Onion salt</li>
          <li>Paprika</li>
          <li>Salt</li>
        </ol>
        <h1>Salmon</h1>
        <ol>
          <li>Salmon</li>
          <li>Olive oil</li>
          <li>Black Pepper</li>
          <li>Salt</li>
          <li>Lemon</li>
        </ol>
      </div>
     );
}

export default Recipe;

