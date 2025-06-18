import MoonIcon from "@/components/icons/MoonIcon";
import Button from "@/components/shared/button";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center border-b-4 border-black">
      <div className="flex justify-between w-full py-3 px-3 border-r-4 border-black">
        <div className="text-2xl my-auto">
          shonen<span className="text-sm">dev.</span>
        </div>
        <Button type="button" text="Menu" className="px-4" />
      </div>
      <div className="p-3">
        <MoonIcon className="w-6" />
      </div>
    </header>
  );
}
