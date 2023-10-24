import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="STU_ID_NUM" />
            <TextField source="STU_NAME" />
            <TextField source="STU_PHONE_NUM" />
            <TextField source="PEG_OF_STDY"/>
            <TextField source="CLDR_YR"/>
        </Datagrid>
    </List>
);