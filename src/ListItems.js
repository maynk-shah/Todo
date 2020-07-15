import React from 'react';
import './ListItems.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Flipmove from  'react-flip-move'

function ListItems(props){
   const items =props.items;
   const listItems = items.map(item=> 
   {
       return <div className="list" key={item.key}>
           <p>
             <input type='text' id={item.key}  value={item.text}
             onChange= {(e) => {props.setUpdate(e.target.value,item.key) }}/>
           <span>
               <DeleteIcon className="deleteicon" icon='trash'
               onClick={ ()=> props.deleteItem(item.key)}
               />
           </span> </p>
       </div> 
   } )
       return(
       <div>
         <Flipmove duration={500} easing='ease-in-out'>
          {listItems}
          </Flipmove> </div>
    )
}

export default ListItems;