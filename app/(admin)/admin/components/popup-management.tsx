import { getPopupsAction } from "@/app/actions/popup/popup.action";
import PopupList from "./popup-list";
import PopupCreateDialog from "./popup-create-dialog";

export default async function PopupManagement() {
  const popups = await getPopupsAction();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">팝업 목록</h2>
        <PopupCreateDialog />
      </div>
      
      <PopupList popups={popups} />
    </div>
  );
}