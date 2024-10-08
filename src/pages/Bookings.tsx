import SearchFilterTab from "src/components/common/SearchFilterTab";
import HeadingContainer from "src/components/layout/HeadingContainer";
import ContentWrapper from "src/components/layout/ContentWrapper";
import ContentHeaderWrapper from "src/components/layout/ContentHeaderWrapper";
import ContentHeader from "src/components/layout/ContentHeader";
import SingleBooking from "src/components/layout/SingleBooking";
import LoadingSpinner from "src/components/common/LoadingSpinner";
import Pagination from "src/components/layout/Pagination";
import ButtonWrapper from "src/components/layout/ButtonWrapper";
import {
  bookingsSortOptions,
  bookingsTabs,
  itemsPerPage,
} from "src/utils/constants";
import useFetchData from "src/hooks/useFetchData";
import ShowResults from "src/components/layout/ShowResults";
import { fetchBookings } from "src/api/BookingsApi";
import { BookingType } from "src/types/types";

const Bookings = () => {
  const {
    data: bookings,
    loading,
    numberOfItems: numberOfBookings,
    currentPage,
    setData: setBookings,
    setNumberOfItems: setNumberOfBookings,
  } = useFetchData("bookings", fetchBookings);

  const showResultsFrom = (currentPage - 1) * itemsPerPage + 1;
  let showResultsTo = showResultsFrom + itemsPerPage - 1;
  if (showResultsTo > numberOfBookings) {
    showResultsTo = numberOfBookings;
  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <HeadingContainer title="All bookings">
        <SearchFilterTab
          tabOptions={bookingsTabs}
            sortOptions={bookingsSortOptions}
        />
      </HeadingContainer>
      <ContentWrapper>
        <ContentHeaderWrapper>
          <ContentHeader title="Room" />
          <ContentHeader title="Guest" />
          <ContentHeader title="Dates" />
          <ContentHeader title="Status" />
          <ContentHeader title="Amount" />
        </ContentHeaderWrapper>
          {bookings.map((booking) => (
            <SingleBooking
              key={booking.id}
              booking={booking as BookingType}
              setBookings={
                setBookings as React.Dispatch<
                  React.SetStateAction<BookingType[]>
                >
              }
              setNumberOfBookings={setNumberOfBookings}
            />
          ))}
        <ButtonWrapper justify="between">
          <ShowResults
            showResultsFrom={showResultsFrom}
            showResultsTo={showResultsTo}
            numberOfItems={numberOfBookings}
          />
          {numberOfBookings > itemsPerPage && (
            <Pagination numberOfItems={numberOfBookings} />
          )}
        </ButtonWrapper>
      </ContentWrapper>
    </>
  );
};

export default Bookings;
