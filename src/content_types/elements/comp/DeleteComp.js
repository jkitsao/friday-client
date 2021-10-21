import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { DeleteComp } from "../../pages/comp/ModelEntriesComp";
function Delete({ id, handleDeleteField }) {
  const handleDelete = (id) => {
    handleDeleteField(id);
  };
  const [open, setOpen] = useState(false);
  const title = "Delete field";
  const message =
    "Are you sure you want to delete this field? This action cannot be undone.";
  return (
    // <Menu placement="right-end">
    //   <MenuButton as={Button}>
    //     <div>
    //       <span className="  text-sm">
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M4 6h16M4 12h16M4 18h16"
    //           />
    //         </svg>
    //       </span>
    //     </div>
    //   </MenuButton>
    //   <MenuList width="8">
    //     <MenuItem onClick={handleDelete}>
    //       <div className="flex justify-center text-red-600">
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    //           />
    //         </svg>
    //         <span className="mx-1">delete</span>
    //       </div>
    //     </MenuItem>
    //   </MenuList>
    // </Menu>
    <DeleteComp
      setOpen={setOpen}
      open={open}
      field={false}
      deleteFunction={handleDeleteField}
      setOpen={setOpen}
      title={title}
      message={message}
      id={id}
    />
  );
}

export default Delete;
