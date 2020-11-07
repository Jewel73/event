import  React  from "react";
import { Item, List } from "semantic-ui-react";

export default function EventAttendee({attendee}){
        return (
                // Child Element Of Event List Item
               <List.Item>
                       <Item.Image size='mini' circular src={attendee.photoURL} alt="Image"/>
               </List.Item>
        )
}