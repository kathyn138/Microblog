import {
  ADDPOST,
  REMOVEPOST,
  EDITPOST,
  VOTE,
  LOADTITLES
} from "../actionTypes";

// need this fn to avoid passing in all details about post
// into title
// passing all details into title would be wasteful 

function makeTitleFromPost(post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    votes: post.votes
  };
}

export default function rootReducer(state = [], action) {
  let id, description, title, votes, titleIdx;

  switch (action.type) {

    case LOADTITLES:
      return [...action.titles];

    case ADDPOST:
      return [...state, makeTitleFromPost(action.post)];

    case EDITPOST:
      titleIdx = state.findIndex(title => title.id === action.payload.id);
      ({ id, title, description, votes } = action.payload.post);

      return [
        ...state.slice(0, titleIdx),
        { id, title, description, votes },
        ...state.slice(titleIdx + 1)
      ]

    case REMOVEPOST:
      return state.filter(title => title.id !== action.id);

    case VOTE: 
      titleIdx = state.findIndex(title => title.id === action.payload.postId);

      return [
        ...state.slice(0, titleIdx),
        { ...state[titleIdx], votes: action.payload.votes },
        ...state.slice(titleIdx + 1)
      ]

    default:
      return state;
  }
}