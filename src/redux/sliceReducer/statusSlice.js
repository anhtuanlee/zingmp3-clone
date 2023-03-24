import {
    IS_RANDOM_STORAGE,
    IS_REPEAT_STORAGE,
    VOLUME_STORAGE,
} from '../../config/localStorages';
import { createSlice } from '@reduxjs/toolkit';


export const statusSlice = createSlice({
    name: 'status',
    initialState: {
        isPlaying: false,
        isRepeat: IS_REPEAT_STORAGE ?? false,
        isRandom: IS_RANDOM_STORAGE ?? false,
        isLoading: false,
        isVolume: VOLUME_STORAGE > 0 ? true : false,
        isRequirePlay: false,
    },
    reducers: {
        isPlayingChange: (state, action) => {
            state.isPlaying = action.payload;
        },
        isRepeatChange: (state, action) => {
            state.isRepeat = action.payload;
        },
        isRandomChange: (state, action) => {
            state.isRandom = action.payload;
        },
        isLoadingChange: (state, action) => {
            state.isLoading = action.payload;
        },
        isVolumeChange: (state, action) => {
            state.isVolume = action.payload;
        },
        isRequirePlayChange: (state, action) => {
            state.isRequirePlay = action.payload;
        },
    },
});
