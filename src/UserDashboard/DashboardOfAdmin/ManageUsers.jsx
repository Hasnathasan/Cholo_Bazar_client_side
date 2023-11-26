
import { Button, ButtonGroup, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import useUsers from "../../Hooks/useUsers";
import img from '../../../public/user.png'
import axios from "axios";

const ManageUsers = () => {
    const [usersData, isUsersDataLoading, refetch] = useUsers();
    if(isUsersDataLoading){
        return <h1>Loading..........</h1>
    }
    const handleRoleChange = (email, userRole, phoneNumber) => {
        axios.patch(`http://localhost:8000/changeUserRole/?${email ? `email=${email}` : `phoneNumber=${phoneNumber}`}`, {userRole})
            .then(data => {
                if(data.data.modifiedCount > 0){
                    refetch()
                }
            })
      };
    console.log(usersData);
    return (
        <div className="overflow-x-auto w-full md:w-[80%]">
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
      <Button onClick={() => handleRoleChange(user?.email,"admin", user?.phoneNumber)} isDisabled={user.userRole === "admin"} color="primary" startContent={img}>Admin</Button>
      <Button onClick={() => handleRoleChange(user?.email,"user", user?.phoneNumber)} isDisabled={user.userRole === "user"} color="success" startContent={img}>User</Button>
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