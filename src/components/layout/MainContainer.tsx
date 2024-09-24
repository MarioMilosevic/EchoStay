import { MainContainerProps } from "../../types/types";
import Overlay from "./Overlay";
const MainContainer = ({ children, isSidebarOpen, closeSidebar }: MainContainerProps) => {
  return (
    <main className="bg-neutral-100 px-12 min-h-screen dark:bg-slate-700" onClick={closeSidebar}>
      {isSidebarOpen && <Overlay showChildren={false} />}
      {children}
    </main>
  );
};

export default MainContainer;
