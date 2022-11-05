import create from 'zustand';

type PhoneModelStore = {
  backColor: string;
  setBackColor: (color: string) => void;
};

export const usePhoneModelStore = create<PhoneModelStore>((set) => ({
  backColor: '#ff15d8',
  setBackColor: (backColor) => set({ backColor }),
}));
