import { create } from 'zustand';
import { asset } from '@/lib/asset';

type MacbookStore = {
    color: string;
    setColor: (color: string) => void;
    scale: number;
    setScale: (scale: number) => void;
    texture: string;
    setTexture: (texture: string) => void;
    reset: () => void;
};

const useMacbookStore = create<MacbookStore>((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),
    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: asset('/videos/feature-1.mp4'),
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: '#2e2c2e', scale: 0.08, texture: asset('/videos/feature-1.mp4') }),
}))


export default useMacbookStore;


/*export const useMacbookStore = create((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),
    scale: 0.08,
    setScale: (scale) => set({ scale }),
    reset: () => set({ color: '#2e2c2e', scale: 0.08 }),
}))*/


