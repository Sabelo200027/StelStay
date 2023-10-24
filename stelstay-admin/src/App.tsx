import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser,} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList } from "./posts";
import {} from "./students";

export const App = () => ( 
<Admin dataProvider={dataProvider}>
  <Resource name="users" list={ListGuesser}/>
  <Resource name="students" list={ListGuesser}/>
  <Resource name="lease payer" list={ListGuesser}/>
  <Resource name="Accomodations" list={UserList}/>
  <Resource name="posts" list={PostList} />
  <Resource name="users" list={UserList} recordRepresentation="name" />
</Admin>
);
