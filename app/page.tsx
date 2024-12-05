import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FlashSales from "@/components/FlashSales";


export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start px-8 pb-12 gap-4 ">
      <Banner/>
      <Categories/>
      <FlashSales/>
    </div>
  );
}
