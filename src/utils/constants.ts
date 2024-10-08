import { IoSettingsSharp } from "react-icons/io5";
import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";


export const links = [
  { text: "bookings", icon: FaRegCalendarAlt },
  { text: "rooms", icon: MdLocalHotel },
  { text: "users", icon: FaUsers },
  { text: "settings", icon: IoSettingsSharp },
];

export const bookingsTabs = ["All", "Checked out", "Checked in", "Unconfirmed"];

export const itemsPerPage = 10;

export const bookingsSortOptions = [
  "date (upcoming first)",
  "date (past first)",
  "amount (high first)",
  "amount (low first)",
];

export const roomsTabs = ["All", "With discount", "No discount"];

export const roomsSortOptions = [
  "name (A-Z)",
  "name (Z-A)",
  "price (low first)",
  "price (high first)",
  "capacity (low first)",
  "capacity (high first)",
];

export const initialSettingsState = {
  id: 0,
  breakfastPrice: 0,
  created_at: "",
  maxGuests: 0,
  maxNights: 0,
  minNights: 0,
};

export const supabaseUrl = "https://xonugvplyyycodzjotuu.supabase.co";
