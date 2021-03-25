import React from 'react';

import GroupOfButtons from '../Components/GroupOfButtons';

const DishesTable = () => {
  return(
    <table align="center" className="dishes">
      <thead>
        <tr>
          <th>id</th>
          <th>Dish</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dish 1</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dish 1</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dish 1</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DishesTable;