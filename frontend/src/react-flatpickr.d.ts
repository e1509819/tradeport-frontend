declare module "react-flatpickr" {
  import { ComponentType } from "react";
  import { FlatpickrFn } from "flatpickr";

  interface FlatpickrProps {
    value?: Date | Date[];
    onChange?: (selectedDates: Date[]) => void;
    options?: Parameters<FlatpickrFn>[1]; // Pass options directly from Flatpickr
    className?: string;
    placeholder?: string;
  }

  const Flatpickr: ComponentType<FlatpickrProps>;
  export default Flatpickr;
}
