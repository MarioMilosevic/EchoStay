import { IoSettingsSharp } from "react-icons/io5";
import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { MdLocalHotel, MdDelete, MdModeEditOutline } from "react-icons/md";
import { TableHeader } from "./types";
import { HiDocumentDuplicate } from "react-icons/hi";

export const initialRoomsState = [];

export const links = [
  { heading: "bookings", icon: FaRegCalendarAlt },
  { heading: "rooms", icon: MdLocalHotel },
  { heading: "users", icon: FaUsers },
  { heading: "settings", icon: IoSettingsSharp },
];

export const roomsTabs = ["All", "No discount", "With discount"];
export const roomsSortOptions = [
  {
    name: "name (A-Z)",
    value: "name-asc",
  },
  {
    name: "name (Z-A)",
    value: "name-desc",
  },
  {
    name: "price (low first)",
    value: "name-desc",
  },
  {
    name: "price (high-first)",
    value: "name-asc",
  },
  {
    name: "name (A-Z)",
    value: "name-asc",
  },
  {
    name: "capacity (low-first)",
    value: "capacity-desc",
  },
  {
    name: "capacity (high-first)",
    value: "capacity-asc",
  },
];
export const bookingsTabs = ["All", "Checked out", "Checked in", "Unconfirmed"];

export const tableHeaders: TableHeader[] = [
  { title: "", width: "small" },
  { title: "Room", width: "big" },
  { title: "Capacity", width: "big" },
  { title: "Price", width: "medium" },
  { title: "Discount", width: "medium" },
];

export const tableHeaderOptions = {
  small: "w-[10%]",
  medium: "w-[20%]",
  big: "w-[25%]",
};

export const roomsOptions = [
  {
    icon: HiDocumentDuplicate,
    text: "Duplicate",
  },
  {
    icon: MdModeEditOutline,
    text: "Edit",
  },
  {
    icon: MdDelete,
    text: "Delete",
  },
];
