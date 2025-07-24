import BottomNavigation from "../component/mobile/headerFooter/BottomNavigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}
