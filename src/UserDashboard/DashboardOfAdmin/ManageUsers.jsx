
import { Button, ButtonGroup, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import useUsers from "../../Hooks/useUsers";
import img from '../../../public/user.png'

const ManageUsers = () => {
    const [usersData, isUsersDataLoading, refetch] = useUsers();
    if(isUsersDataLoading){
        return <h1>Loading..........</h1>
    }
    console.log(usersData);
    return (
        <div>
             <Table aria-label="Example table with custom cells">
      <TableHeader>
          <TableColumn >
            Name
          </TableColumn>
          <TableColumn >
            Email / Number
          </TableColumn>
          <TableColumn >
            User Role
          </TableColumn>
          <TableColumn >
            <h5 className="text-center">Change User Role</h5>
          </TableColumn>
      </TableHeader>
      <TableBody >
          {
            usersData?.map(user => <TableRow key={user._id}>
                <TableCell>
                <User
                avatarProps={{radius: "md", src: user.photoUrl || img}}
                description={user.email || user.phoneNumber}
                name={user.name || "Unknown"}
              >
              </User>
                </TableCell>
                <TableCell>{user.email || user.phoneNumber}</TableCell>
                <TableCell><Chip className="capitalize" color={user.userRole == "admin" ? "success" : "primary"} size="sm" variant="flat">
            {user.userRole}
          </Chip></TableCell>
                <TableCell>
                <ButtonGroup variant="solid">
      <Button isDisabled={user.userRole === "admin"} color="primary" startContent={img}>Admin</Button>
      <Button isDisabled={user.userRole === "user"} color="success" startContent={img}>User</Button>
    </ButtonGroup>
                </TableCell>
              </TableRow>)
          }
      </TableBody>
    </Table>
        </div>
    );
};

export default ManageUsers;