import Heading from "@/components/Heading";
import Searchbookings from "@/components/Searchbookings";
import ViewBookingTabs from "@/components/ViewBookingTabs";

export default function Home() {
  return (
    <div>
      <Searchbookings></Searchbookings>
      <Heading></Heading>
      <ViewBookingTabs></ViewBookingTabs>
    </div>
    
  )
}
