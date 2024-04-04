import React from "react";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

type Props = {};

const User = (props: Props) => {
  return (
    <div className="container mx-auto flex items-start flex-wrap flex-col">
      <h1 className="text-xl font-bold mx-10">User Options</h1>
      <ul className="self-start">
        <Link className="flex p-4 m-10 items-center border-2 rounded-lg bg-[#2f2542] border-[#e76a38]" href="">
          <span className="ml-2 mr-8 text-[#e76a38]">
            <FaUserEdit size={30} />
          </span>
          <li>Your Orders</li>
        </Link>
        <Link className="flex p-4 m-10 items-center border-2 rounded-lg bg-[#2f2542] border-[#e76a38]" href="/enter/userdetails">
          <span className="ml-2 mr-8 text-[#e76a38]">
            <FaBoxOpen size={30} />
          </span>
          <li>Edit User Details</li>
        </Link>
      </ul>
    </div>
  );
};

export default User;
