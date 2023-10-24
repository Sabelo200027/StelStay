import {Admin, Resource, ListGuesser, EditGuesser, ShowGuesser,} from "react-admin";
import { dataProvider } from "./dataProvider";
import {UserList} from "./users";
import { PostList } from "./posts";

export const App = () => ( 
<Admin dataProvider={dataProvider}>
  <Resource name="Users" list={ListGuesser}/>
  <Resource name="Accomodation Booking" list={UserList}/>
  <Resource name="Accomodation Status" list={ListGuesser} />
  <Resource name="posts" list={PostList} />
  <Resource name="users" list={UserList} recordRepresentation="name" />
</Admin>
);
