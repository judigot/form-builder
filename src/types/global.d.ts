declare global {
  interface TextField {
    title: string;
    type: string;
    maxLength?: boolean;
  }

  interface NumberField {
    title: string;
    type: string;
    minVal?: number;
    maxVal?: number;
  }

  interface BooleanField {
    title: string;
    type: string;
    default: boolean;
    // default?: string;
  }

  interface DropdownField {
    title: string;
    type: string;
    options: boolean;
    default: number;
  }

  interface TimeField {
    title: string;
    type: string;
  }
}

export {};
