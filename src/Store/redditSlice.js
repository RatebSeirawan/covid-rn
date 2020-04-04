import {createSlice} from '@reduxjs/toolkit';
import Reddit from '@API/reddit';

export const slice = createSlice({
  name: 'reddit',
  initialState: {
    loading: false,
    posts: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.value;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {setLoading, setPosts} = slice.actions;

export const getPosts = async (dispatch) => {
  dispatch(setLoading(true));
  const result = await Reddit.fetchRedditPosts();
  dispatch(setPosts(result?.data?.children));
  dispatch(setLoading(false));
};

export const selectLoading = (state) => state.reddit.loading;
export const selectPosts = (state) => state.reddit.posts;

export default slice.reducer;
