import { RoomType } from "../types/types";

export const updateRooms = (
  rooms: RoomType[],
  filter: string,
  sort: string
): RoomType[] => {
  let roomsCopy = [...rooms];

  switch (filter) {
    case "No discount":
      roomsCopy = roomsCopy.filter((room) => room.discount === 0);
      break;
    case "With discount":
      roomsCopy = roomsCopy.filter((room) => room.discount > 0);
      break;
    case "All rooms":
    default:
      break;
  }

  switch (sort) {
    case "name (A-Z)":
      roomsCopy.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name (Z-A)":
      roomsCopy.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price (low first)":
      roomsCopy.sort((a, b) => Number(a.regularPrice) - Number(b.regularPrice));
      break;
    case "price (high first)":
      roomsCopy.sort((a, b) => Number(b.regularPrice) - Number(a.regularPrice));
      break;
    case "capacity (low first)":
      roomsCopy.sort((a, b) => Number(a.capacity) - Number(b.capacity));
      break;
    case "capacity (high first)":
      roomsCopy.sort((a, b) => Number(b.capacity) - Number(a.capacity));
      break;
    default:
      break;
  }

  return roomsCopy;
};

export const getRoomImagePath = (imageUrl:string) => {
   const imagePath = imageUrl.split(
     "/storage/v1/object/public/roomsStorage/"
  )[1];
  return imagePath
}

