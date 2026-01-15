import KIT from "@/components/common/FREE_Information_Kit";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import Topbar1 from "@/components/headers/Topbar1";

export default function KitPage() {
  return (
    <>
      <Topbar1 />
      <Header1 onepage />
      <div className="main-content kit-hs-wrap hs-theme-dark">
        <KIT />
      </div>
      <Footer1 />
    </>
  );
}